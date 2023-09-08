let inputs = document.querySelectorAll("input");
let buttons = document.querySelectorAll("button");
let miliSeconds = 0;
let minutes = 0;
let seconds = 0;
let secsInterval;
function stopWatch() {
  miliSeconds++;
  if (miliSeconds === 1000) {
    miliSeconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  inputs[2].value = miliSeconds.toString().padStart(2, "0");
  inputs[1].value = seconds.toString().padStart(2, "0");
  inputs[0].value = minutes.toString().padStart(2, "0");
}

buttons[0].addEventListener("click", function () {
  secsInterval = setInterval(stopWatch);
});

buttons[1].addEventListener("click", function () {
  clearInterval(secsInterval);
});
buttons[2].addEventListener("click", function () {
  clearInterval(secsInterval);
  inputs[0].value = "00";
  inputs[1].value = "00";
  inputs[2].value = "00";
  hours = 0;
  minutes = 0;
  seconds = 0;
});
