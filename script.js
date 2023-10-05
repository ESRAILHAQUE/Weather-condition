const apiKey = "9eafb19389a0bcaa5f1741a2e4f9d25c";
const searchButton = document.getElementById("Search");

searchButton.addEventListener("click", function () {
  const city = document.getElementById("location").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("place").innerText = data.name;
      document.getElementById("weather").innerText = data.weather[0].main;
      document.getElementById("temp").innerText = (data.main.temp - 273.15).toFixed(2);
    });
})
