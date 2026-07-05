const db = require("../../db");

async function logAudit({ entityType, entityId, action, oldData, newData }) {
  await db.query(
    `INSERT INTO audit_logs (entity_type, entity_id, action, old_data, new_data)
     VALUES ($1,$2,$3,$4,$5)`,
    [
      entityType,
      entityId,
      action,
      oldData,
      newData
    ]
  );
}

module.exports = { logAudit };
