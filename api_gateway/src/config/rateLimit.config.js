module.exports = {
  windowMs: 1000, // 1 second window
  algorithms: {
    FIXED_WINDOW: {
      windowMs: 1000
    },
    SLIDING_WINDOW: {
      windowMs: 1000
    },
    TOKEN_BUCKET: {
      refillRatePerSecond: 1
    }
  }
};
