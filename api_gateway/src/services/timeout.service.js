module.exports = function withTimeout(promise, timeoutMs) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeoutMs)
    )
  ]);
};
