const { validateKey } = require("../auth/apiKey.service");

module.exports = (req, res, next) => {
  const key = req.headers["x-api-key"];
  if (!key) return res.status(401).json({ error: "API key required" });

  const client = validateKey(key);
  if (!client) return res.status(403).json({ error: "Invalid API key" });

  req.client = client;
  next();
};
