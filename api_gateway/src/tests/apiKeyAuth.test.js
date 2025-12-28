const request = require("supertest");
const app = require("../app");

describe("API Key Authentication", () => {
  test("rejects request without API key", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe("API key missing");
  });

  test("rejects request with invalid API key", async () => {
    const res = await request(app)
      .get("/")
      .set("x-api-key", "invalid-key");

    expect(res.statusCode).toBe(403);
    expect(res.body.error).toBe("Invalid API key");
  });

  test("allows request with valid API key", async () => {
    const res = await request(app)
      .get("/")
      .set("x-api-key", "free-key");

    expect([200, 429]).toContain(res.statusCode);
  });
});
