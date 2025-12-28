const store = require("./apiKey.store");
module.exports.validateKey = (key) => store[key] || null;
