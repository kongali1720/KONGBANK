function toMT103(tx) {
  return {
    type: "MT103",
    sender: tx.from,
    receiver: tx.to,
    amount: tx.amount,
    currency: tx.currency,
    reference: tx.txId
  };
}

module.exports = { toMT103 };
