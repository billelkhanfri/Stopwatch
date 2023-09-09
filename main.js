let inputs = document.querySelectorAll("input");
let buttons = document.querySelectorAll("button");
let miliSeconds = 0;
let minutes = 0;
let seconds = 0;
let secsInterval;
let miliInterval;
let minuteInterval;
function miliSecondsWacth() {
  miliSeconds++;

  if (miliSeconds === 1000) {
    miliSeconds = 0;
  }
  inputs[2].value = miliSeconds.toString().padStart(2, "0");
}
function secondsWatch() {
  seconds++;
  if (seconds === 59) {
    seconds = 0;
  }
  inputs[1].value = seconds.toString().padStart(2, "0");
}
function minuteWatch() {
  minutes++;
  if (minutes === 59) {
    minutes = 0;
  }
  inputs[0].value = minutes.toString().padStart(2, "0");
}

buttons[0].addEventListener("click", function () {
  clearInterval(miliInterval);
  clearInterval(secsInterval);
  clearInterval(minuteInterval);
  miliInterval = setInterval(miliSecondsWacth, 1);
  secsInterval = setInterval(secondsWatch, 1000);
  minuteInterval = setInterval(minuteWatch, 60000);
});

buttons[1].addEventListener("click", function () {
  clearInterval(miliInterval);
  clearInterval(secsInterval);
  clearInterval(minuteInterval);
  console.log("stop");
});
buttons[2].addEventListener("click", function () {
  clearInterval(miliInterval);
  clearInterval(secsInterval);
  clearInterval(minuteInterval);
  inputs[0].value = "00";
  inputs[1].value = "00";
  inputs[2].value = "00";
  hours = 0;
  minutes = 0;
  seconds = 0;
});
