const db = require("../../db");

async function transfer(tx) {
  const client = await db.connect();

  try {
    await client.query("BEGIN");

    // 🔴 DEBIT ACCOUNT
    await client.query(
      "UPDATE accounts SET balance = balance - $1 WHERE account_number = $2",
      [tx.amount, tx.from]
    );

    // 🟢 CREDIT ACCOUNT
    await client.query(
      "UPDATE accounts SET balance = balance + $1 WHERE account_number = $2",
      [tx.amount, tx.to]
    );

    // 💸 INSERT TRANSACTION
    const result = await client.query(
      `INSERT INTO transactions (tx_id, from_account, to_account, amount, currency, status)
       VALUES ($1,$2,$3,$4,$5,$6)
       RETURNING *`,
      [tx.txId, tx.from, tx.to, tx.amount, tx.currency, "POSTED"]
    );

    await client.query("COMMIT");

    return result.rows[0];

  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}

module.exports = { transfer };
