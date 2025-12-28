const router = require("express").Router();
const { getPlans } = require("../plans/plan.service");

router.get("/plans", (_, res) => {
  res.json(getPlans());
});

module.exports = router;
