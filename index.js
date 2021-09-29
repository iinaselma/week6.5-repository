function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(
    response.displayTemperature.main.temp
  );
  cityElement.innerHTML = response.displayTemperature.name;
  humidityElement.innerHTML = response.displayTemperature.main.humidityElement;
  windElement.innerHTML = formatDate(response.displayTemperature.dt * 1000);
}

let apiKey = "9b9e8796103fa5683da1cec624461efa";
let city = "New York";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather/q=${city}&apiid=${apiKey}&units=metric`;
