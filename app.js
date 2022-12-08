let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let day = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function showWeather(response) {
  document.querySelector("#city-poznan").innerHTML = response.data.name;
  document.querySelector(".temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#sunrise").innerHTML = response.data.sys.sunrise;
  let weatherType = document.querySelector("#type");
  weatherType.innerHTML = response.data.weather[0].description;
}

function search(event) {
  event.preventDefault();
  let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
  let city = document.querySelector("#city-input").value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

currentDate.innerHTML = `${days[day]} ${hours}:${minutes}`;
