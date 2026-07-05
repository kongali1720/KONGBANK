-- 🏦 CORE ACCOUNTS TABLE
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    account_number VARCHAR(50) UNIQUE NOT NULL,
    owner_name VARCHAR(100),
    currency VARCHAR(10) DEFAULT 'USD',
    balance NUMERIC(18,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- 💸 TRANSACTIONS LEDGER (DOUBLE ENTRY)
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    tx_id VARCHAR(100) UNIQUE NOT NULL,
    from_account VARCHAR(50),
    to_account VARCHAR(50),
    amount NUMERIC(18,2),
    currency VARCHAR(10),
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT NOW()
);

-- 📜 AUDIT TRAIL (IMMUTABLE LOG)
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    entity_type VARCHAR(50),
    entity_id VARCHAR(100),
    action VARCHAR(50),
    old_data JSONB,
    new_data JSONB,
    created_at TIMESTAMP DEFAULT NOW()
);
