const router = require("express").Router();

router.get("/", (_, res) => res.json({ status: "ok" }));
router.get("/ready", (_, res) => res.json({ ready: true }));

module.exports = router;
