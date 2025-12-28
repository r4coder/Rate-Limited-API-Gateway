const plans = require("./plan.config");

/**
 * Get all available plans
 */
const getPlans = () => {
  return plans;
};

/**
 * Get plan by name
 */
const getPlanByName = (planName) => {
  return plans[planName] || null;
};

module.exports = {
  getPlans,
  getPlanByName
};
