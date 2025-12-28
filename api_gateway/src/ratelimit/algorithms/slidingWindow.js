/**
 * Sliding Window Rate Limiter
 * Keeps timestamps of recent requests
 */
class SlidingWindow {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.timestamps = [];
  }

  consume() {
    const now = Date.now();

    // Remove expired timestamps
    this.timestamps = this.timestamps.filter(
      (ts) => now - ts < this.windowMs
    );

    if (this.timestamps.length >= this.limit) {
      return false;
    }

    this.timestamps.push(now);
    return true;
  }
}

module.exports = SlidingWindow;
