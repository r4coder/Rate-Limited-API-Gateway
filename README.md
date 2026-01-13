# Rate-Limited-API-Gateway
# Rate-Limited API Gateway

## Overview
The Rate-Limited API Gateway is a backend middleware service designed to protect APIs from abuse, excessive traffic, and denial-of-service scenarios. It enforces request limits per client using Redis-backed rate limiting algorithms, ensuring scalability, low latency, and consistent enforcement across distributed systems.

This project focuses on real-world backend engineering concepts such as traffic control, distributed caching, middleware design, and system scalability.

---

## Key Features
- Rate limiting per IP or API key
- Redis-backed distributed rate limiting
- Token Bucket and Sliding Window algorithms
- Handles burst traffic gracefully
- Returns standard HTTP error responses
- Modular and production-ready code structure
- Suitable for microservices architectures

---

## Tech Stack
- **Language:** TypeScript
- **Backend:** Node.js, Express.js
- **Rate Limiting & Caching:** Redis
- **ORM (optional):** Prisma ORM
- **Database (optional):** PostgreSQL
- **Deployment:** AWS (EC2 / Load Balancer)
- **Build Tool:** Webpack

---

## Rate Limiting Algorithms

### Token Bucket
- Each client has a bucket with a fixed number of tokens.
- Tokens are refilled at a constant rate.
- Each request consumes one token.
- Requests are rejected when the bucket is empty.

### Sliding Window Counter
- Tracks request count over a rolling time window.
- Prevents sudden request spikes at fixed window boundaries.
- Provides more accurate rate limiting than fixed windows.

Redis ensures consistent rate limit enforcement across multiple gateway instances.

---

## Request Flow
1. Client sends a request to the API Gateway
2. Gateway extracts client identifier (IP / API key)
3. Redis checks current request count
4. If limit exceeded → request rejected
5. If allowed → request forwarded to backend service

## HTTP Response (Rate Limit Exceeded)
```json
{
  "status": 429,
  "message": "Too many requests. Please try again later."
}
rate-limited-api-gateway/
│
├── src/
│   ├── middleware/
│   │   └── rateLimiter.ts
│   ├── routes/
│   │   └── api.routes.ts
│   ├── config/
│   │   └── redis.ts
│   ├── app.ts
│   └── server.ts
│
├── prisma/
│   └── schema.prisma
│
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md


---

