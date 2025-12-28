const client = require("prom-client");

// Collect default Node.js metrics (CPU, memory, event loop, etc.)
client.collectDefaultMetrics();

const register = client.register;

module.exports = {
  client,
  register
};
