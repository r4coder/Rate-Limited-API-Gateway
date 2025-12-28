const router = require("express").Router();
const apiKeyAuth = require("../middlewares/apiKeyAuth.middleware");
const rateLimit = require("../middlewares/rateLimit.middleware");
const forward = require("../services/forward.service");

router.all(
  "/*",
  apiKeyAuth,
  rateLimit,
  async (req, res, next) => {
    try {
      const response = await forward(req);
      res.status(response.status).send(response.data);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
