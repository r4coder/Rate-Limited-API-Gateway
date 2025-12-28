const request = require("supertest");
const app = require("../app");

describe("Rate Limiting", () => {
  test("enforces rate limit for FREE plan", async () => {
    const agent = request(app);

    const responses = [];
    for (let i = 0; i < 5; i++) {
      responses.push(
        await agent.get("/").set("x-api-key", "free-key")
      );
    }

    const has429 = responses.some(r => r.statusCode === 429);
    expect(has429).toBe(true);
  });

  test("PRO plan allows higher throughput", async () => {
    const agent = request(app);

    let blocked = false;
    for (let i = 0; i < 5; i++) {
      const res = await agent.get("/").set("x-api-key", "pro-key");
      if (res.statusCode === 429) blocked = true;
    }

    expect(blocked).toBe(false);
  });
});
