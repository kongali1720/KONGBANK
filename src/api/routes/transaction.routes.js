const service = require("../../core/services/transaction.service");

exports.transfer = async (req, res) => {
  try {
    const result = await service.processTransfer(req.body);

    res.json({
      status: "SUCCESS",
      system: "KONG BANK CORE",
      data: result
    });

  } catch (err) {
    res.status(400).json({
      status: "FAILED",
      message: err.message
    });
  }
};

exports.getStatus = async (req, res) => {
  const result = service.getTransaction(req.params.txId);

  if (!result) {
    return res.status(404).json({ status: "NOT_FOUND" });
  }

  res.json(result);
};
