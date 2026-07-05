const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    system: "KONG BANK CORE",
    timestamp: new Date()
  });
});

app.listen(4000, () => {
  console.log("🏦 KONG BANK API RUNNING ON PORT 4000");
});
