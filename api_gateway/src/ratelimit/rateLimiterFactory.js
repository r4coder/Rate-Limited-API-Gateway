const plans = require("../plans/plan.config");
const TYPES = require("./rateLimit.types");

const FixedWindow = require("./algorithms/fixedWindow");
const SlidingWindow = require("./algorithms/slidingWindow");
const TokenBucket = require("./algorithms/tokenBucket");

const memoryStrategy = require("./strategies/memory.strategy");

module.exports = (client) => {
  const plan = plans[client.plan];

  if (!plan) {
    throw new Error(`Unknown plan: ${client.plan}`);
  }

  return {
    consume: () => {
      const key = client.id; // 🔥 SAME KEY EVERY TIME

      const limiter = memoryStrategy.get(key, () => {
        switch (plan.algorithm) {
          case TYPES.SLIDING_WINDOW:
            return new SlidingWindow(plan.rps, 1000);

          case TYPES.TOKEN_BUCKET:
            return new TokenBucket(plan.rps, plan.rps);

          case TYPES.FIXED_WINDOW:
          default:
            return new FixedWindow(plan.rps, 1000);
        }
      });

      return limiter.consume();
    }
  };
};
