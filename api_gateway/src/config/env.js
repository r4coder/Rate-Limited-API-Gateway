const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  REDIS_URL: process.env.REDIS_URL || "redis://localhost:6379",
  RATE_LIMIT_STRATEGY: process.env.RATE_LIMIT_STRATEGY || "memory"
};
