// src/ratelimit/strategies/memory.strategy.js
const store = new Map();

module.exports = {
  get(key, createLimiter) {
    if (!store.has(key)) {
      store.set(key, createLimiter());
    }
    return store.get(key);
  }
};
