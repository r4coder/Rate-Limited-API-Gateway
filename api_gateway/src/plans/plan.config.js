const RATE_LIMIT_TYPES = require("../ratelimit/rateLimit.types");

module.exports = {
  FREE: {
    name: "FREE",
    rps: 2,
    algorithm: RATE_LIMIT_TYPES.FIXED_WINDOW
  },

  PRO: {
    name: "PRO",
    rps: 10,
    algorithm: RATE_LIMIT_TYPES.SLIDING_WINDOW
  },

  INTERNAL: {
    name: "INTERNAL",
    rps: 100,
    algorithm: RATE_LIMIT_TYPES.TOKEN_BUCKET
  }
};
