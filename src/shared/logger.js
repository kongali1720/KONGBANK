const logger = {
  info: (msg) => console.log("ℹ️ [INFO]", msg),
  warn: (msg) => console.log("⚠️ [WARN]", msg),
  error: (msg) => console.log("❌ [ERROR]", msg),
  debug: (msg) => console.log("🐛 [DEBUG]", msg)
};

module.exports = logger;
