module.exports = (req, res, next) => {
  const limiter = require("../ratelimit/rateLimiterFactory")(req.client);

  if (!limiter.consume()) {
    console.log(`❌ Rate limit exceeded for ${req.client.id}`);
    return res.status(429).json({ error: "Rate limit exceeded" });
  }

  console.log(`✅ Allowed for ${req.client.id}`);
  next();
};
