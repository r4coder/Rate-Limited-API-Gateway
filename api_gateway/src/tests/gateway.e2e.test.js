const request = require("supertest");
const app = require("../app");

describe("API Gateway E2E", () => {
  test("forwards request to downstream service", async () => {
    const res = await request(app)
      .get("/")
      .set("x-api-key", "free-key");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id");
  });

  test("returns 429 when rate limit exceeded", async () => {
    const agent = request(app);
    let lastResponse;

    for (let i = 0; i < 10; i++) {
      lastResponse = await agent.get("/").set("x-api-key", "free-key");
    }

    expect(lastResponse.statusCode).toBe(429);
  });
});
