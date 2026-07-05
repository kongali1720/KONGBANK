function validateISO20022(msg) {
  if (!msg.amount || !msg.from || !msg.to) {
    throw new Error("Invalid ISO 20022 message");
  }

  return true;
}

module.exports = { validateISO20022 };
