/**
 * Token Bucket Rate Limiter
 * Tokens refill over time allowing bursts
 */
class TokenBucket {
  constructor(capacity, refillRatePerSecond = 1) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRatePerSecond;
    this.lastRefill = Date.now();
  }

  consume() {
    const now = Date.now();

    // Refill tokens
    const elapsedSeconds = (now - this.lastRefill) / 1000;
    const refill = elapsedSeconds * this.refillRate;

    this.tokens = Math.min(
      this.capacity,
      this.tokens + refill
    );
    this.lastRefill = now;

    if (this.tokens < 1) {
      return false;
    }

    this.tokens -= 1;
    return true;
  }
}

module.exports = TokenBucket;
