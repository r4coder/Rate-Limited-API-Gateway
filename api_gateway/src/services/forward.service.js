const axios = require("axios");
const { services } = require("../config/services.config");

module.exports = async (req) => {
  const service = services.jsonPlaceholder;

  let forwardPath = req.originalUrl.replace(/^\/api/, "");

  // 🔥 Map test route to valid downstream route
  if (forwardPath === "/test") {
    forwardPath = "/posts/1";
  }

  return axios({
    method: req.method,
    url: `${service.baseUrl}${forwardPath}`,
    headers: {
      "x-forwarded-for": req.ip
    },
    timeout: service.timeout
  });
};
