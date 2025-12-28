const { client } = require("./metrics.registry");

const latencyHistogram = new client.Histogram({
  name: "api_gateway_request_latency_ms",
  help: "Request latency through API gateway",
  labelNames: ["method", "route"],
  buckets: [50, 100, 200, 300, 500, 1000]
});

module.exports = {
  latencyHistogram
};
