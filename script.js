function currentTime() {
  const currentTimeUTC = new Date().toUTCString();
  document.getElementById("currentTimeUTC").textContent = currentTimeUTC;
}

function updateDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[new Date().getUTCDay()];
  document.getElementById("currentDay").textContent = currentDay;
}
window.onload = function () {
  currentTime();
  updateDay();
};
setInterval(currentTime, 1000);
