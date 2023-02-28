let stopwatchInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function updateTime() {
  milliseconds++;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  const hoursStr = hours.toString().padStart(2, "0");
  const minutesStr = minutes.toString().padStart(2, "0");
  const secondsStr = seconds.toString().padStart(2, "0");
  const millisecondsStr = milliseconds.toString().padStart(3, "0");
  document.getElementById(
    "stopwatch"
  ).textContent = `${hoursStr}:${minutesStr}:${secondsStr}.${millisecondsStr}`;
  document.getElementById("cast").addEventListener("click", () => {
    document.getElementById(
      "ans"
    ).innerText = `${hoursStr}:${minutesStr}:${secondsStr}.${millisecondsStr}`;
  });
}

function startStopwatch() {
  stopwatchInterval = setInterval(updateTime, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("stopwatch").textContent = "00:00:00:00";
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("pause").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);
