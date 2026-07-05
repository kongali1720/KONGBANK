const ledger = require("../ledger/ledger.engine");
const kafka = require("../kafka/producer");
const { validateISO20022 } = require("../iso20022/validator");
const { toMT103 } = require("../swift/mt103.transformer");

const transactions = new Map();

async function processTransfer(tx) {
  validateISO20022(tx);

  const txId = "TX-" + Date.now();

  // 🏦 DOUBLE ENTRY LEDGER
  ledger.debit(tx.from, tx.amount);
  ledger.credit(tx.to, tx.amount);

  const record = {
    txId,
    from: tx.from,
    to: tx.to,
    amount: tx.amount,
    currency: tx.currency,
    status: "POSTED",
    timestamp: new Date()
  };

  // 📡 SWIFT MESSAGE GENERATION
  const swiftMessage = toMT103(record);

  // ⚙️ SEND TO KAFKA EVENT STREAM
  kafka.send("kong-bank-transactions", {
    transaction: record,
    swift: swiftMessage
  });

  transactions.set(txId, record);

  return record;
}

function getTransaction(txId) {
  return transactions.get(txId);
}

module.exports = {
  processTransfer,
  getTransaction
};
