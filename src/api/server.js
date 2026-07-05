const express = require("express");
const app = express();

app.use(express.json());

const transactionRoutes = require("./routes/transaction.routes");

app.use("/api/transactions", transactionRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK", system: "KONG BANK CORE" });
});

app.listen(4000, () => {
  console.log("🏦 KONG BANK RUNNING ON PORT 4000");
});
