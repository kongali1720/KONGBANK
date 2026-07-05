const express = require("express");
const router = express.Router();
const controller = require("../controllers/transaction.controller");

router.post("/transfer", controller.transfer);
router.get("/status/:txId", controller.getStatus);

module.exports = router;
