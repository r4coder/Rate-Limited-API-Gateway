const express = require("express");
const gatewayRoutes = require("./routes/gateway.routes");
const healthRoutes = require("./routes/health.routes");
const adminRoutes = require("./routes/admin.routes");
const errorHandler = require("./middlewares/errorHandler.middleware");

const app = express();
app.use(express.json());

app.use("/health", healthRoutes);
app.use("/admin", adminRoutes);
app.use("/", gatewayRoutes);

app.use(errorHandler);
module.exports = app;
