const { client } = require("./metrics.registry");

const requestCounter = new client.Counter({
  name: "api_gateway_requests_total",
  help: "Total number of requests through the API gateway",
  labelNames: ["method", "route", "status"]
});

module.exports = {
  requestCounter
};
