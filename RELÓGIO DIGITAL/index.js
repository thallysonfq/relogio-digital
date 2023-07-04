const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function displayClock() {
  const FullTime = new Date();
  hours.innerText = FullTime.getHours();
  minutes.innerText = FullTime.getMinutes();
  seconds.innerText = FullTime.getSeconds();
}

displayClock();

setInterval(displayClock, 1000);
