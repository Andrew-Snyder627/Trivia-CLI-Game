function startTimer(durationInSeconds, onTimeout) {
  const timer = setTimeout(() => {
    console.log("\n Time is up!");
    onTimeout();
  }, durationInSeconds * 1000);
  
  return timer;
}

module.exports = { startTimer };