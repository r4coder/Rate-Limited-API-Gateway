/**
 * Fixed Window Rate Limiter
 * Allows N requests per fixed time window
 */
class FixedWindow {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.windowStart = Date.now();
    this.count = 0;
  }

  consume() {
    const now = Date.now();

    // Reset window if expired
    if (now - this.windowStart >= this.windowMs) {
      this.windowStart = now;
      this.count = 0;
    }

    // Reject if limit exceeded
    if (this.count >= this.limit) {
      return false;
    }

    this.count += 1;
    return true;
  }
}

module.exports = FixedWindow;
