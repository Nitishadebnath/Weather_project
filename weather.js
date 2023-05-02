const API_KEY = '5bd7e9ebe43c52dd5f0a5dd415e6b986';

const form = document.querySelector('form');
const locationInput = document.querySelector('#location');
const weatherData = document.querySelector('#weather-data');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = locationInput.value;
  getWeatherData(location);
});

async function getWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    updateWeatherData(data);
  } catch (error) {
    console.error(error);
  }
}
function updateWeatherData(data) {
    weatherData.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>${data.weather[0].description}</p>
      <p>Current Temperature: ${data.main.temp}°C</p>
      <p>Feels Like: ${data.main.feels_like}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  }
