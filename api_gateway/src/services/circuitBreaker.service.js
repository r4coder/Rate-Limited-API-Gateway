class CircuitBreaker {
  constructor(failureThreshold = 5, resetTimeout = 10000) {
    this.failureThreshold = failureThreshold;
    this.resetTimeout = resetTimeout;
    this.failureCount = 0;
    this.state = "CLOSED";
    this.nextAttempt = Date.now();
  }

  canRequest() {
    if (this.state === "OPEN") {
      if (Date.now() > this.nextAttempt) {
        this.state = "HALF_OPEN";
        return true;
      }
      return false;
    }
    return true;
  }

  recordSuccess() {
    this.failureCount = 0;
    this.state = "CLOSED";
  }

  recordFailure() {
    this.failureCount++;
    if (this.failureCount >= this.failureThreshold) {
      this.state = "OPEN";
      this.nextAttempt = Date.now() + this.resetTimeout;
    }
  }
}

module.exports = CircuitBreaker;
