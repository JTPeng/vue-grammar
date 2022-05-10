let requestId = 0;
let remainingTime = 0;
// set our end time
const endTime = new Date().getTime() + 10 * 24 * 60 * 60 * 1000;
// const endTime = new Date().getTime() + 10 * 1000;
console.log("endTime", endTime);
// store clock div to avoid repeatedly querying the DOM
const clock = document.getElementById("clock");
// calculate remaining time from now until deadline
function getRemainingTime(deadline) {
  console.log("new Date().getTime();", new Date(new Date().getTime()));
  const currentTime = new Date().getTime();
  return deadline - currentTime - 17;
}
// pad value with zero
function pad(value) {
  return ("0" + Math.floor(value)).slice(-2);
}
// show time repeatedly
function showTime() {
  remainingTime = getRemainingTime(endTime);
  console.log(remainingTime);
  const seconds = pad((remainingTime / 1000) % 60);
  const minutes = pad((remainingTime / (60 * 1000)) % 60);
  const hours = pad((remainingTime / (60 * 60 * 1000)) % 24);
  const days = pad(remainingTime / (24 * 60 * 60 * 1000));

  clock.innerHTML = `${days}:${hours}:${minutes}:${seconds}`;
  // ensure clock only updates if a second or more is remaining
  if (remainingTime >= 1000) {
    requestId = requestAnimationFrame(showTime);
  }
}
function countDown() {
  // kick it all off
  requestId = requestAnimationFrame(showTime);
}

var start = document.getElementById("start");
var cancel = document.getElementById("cancel");
var reset = document.getElementById("reset");

start.onclick = function () {
  console.log("start");
  countDown();
};

cancel.onclick = function () {
  cancelAnimationFrame(requestId);
};
