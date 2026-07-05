class LedgerEngine {
  constructor() {
    this.accounts = new Map();
  }

  ensure(account) {
    if (!this.accounts.has(account)) {
      this.accounts.set(account, 0);
    }
  }

  debit(account, amount) {
    this.ensure(account);
    this.accounts.set(account, this.accounts.get(account) - amount);
  }

  credit(account, amount) {
    this.ensure(account);
    this.accounts.set(account, this.accounts.get(account) + amount);
  }

  getBalance(account) {
    this.ensure(account);
    return this.accounts.get(account);
  }
}

module.exports = new LedgerEngine();
