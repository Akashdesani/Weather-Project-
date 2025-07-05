async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "f83b6e1a15f7fa3ebcb5ced546107ea8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    const temp = data.main.temp;
    const condition = data.weather[0].main;
    const wind = data.wind.speed;

    document.getElementById("weatherResult").innerHTML = `
      <h3>${city}</h3>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>⛅ Condition: ${condition}</p>
      <p>💨 Wind Speed: ${wind} m/s</p>
    `;
  } else {
    document.getElementById("weatherResult").innerHTML = "City not found 😢";
  }
}
