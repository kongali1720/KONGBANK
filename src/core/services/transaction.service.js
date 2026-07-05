const ledger = require("../ledger/ledger.service");
const audit = require("../audit/audit.service");

async function processTransfer(tx) {
  const txId = "TX-" + Date.now();

  const beforeState = {
    from: tx.from,
    to: tx.to,
    amount: tx.amount
  };

  const result = await ledger.transfer({
    txId,
    from: tx.from,
    to: tx.to,
    amount: tx.amount,
    currency: tx.currency
  });

  const afterState = result;

  // 📜 AUDIT TRAIL (CRITICAL BANK FEATURE)
  await audit.logAudit({
    entityType: "TRANSACTION",
    entityId: txId,
    action: "POSTED",
    oldData: beforeState,
    newData: afterState
  });

  return {
    txId,
    status: "POSTED",
    ledger: result
  };
}

module.exports = { processTransfer };
