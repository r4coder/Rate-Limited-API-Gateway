const app = require("./app");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

process.on("SIGTERM", () => {
  console.log("Gracefully shutting down...");
  server.close();
});
