class LedgerEngine {
  constructor() {
    this.balance = {};
  }

  debit(account, amount) {
    this.balance[account] = (this.balance[account] || 0) - amount;
  }

  credit(account, amount) {
    this.balance[account] = (this.balance[account] || 0) + amount;
  }

  getBalance(account) {
    return this.balance[account] || 0;
  }
}

module.exports = new LedgerEngine();
