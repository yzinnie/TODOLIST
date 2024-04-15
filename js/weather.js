const API_KEY = config.API_KEY;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:first-child');
      const weather = document.querySelector('#weather span:last-child');
      const temp = Math.trunc(data.main.temp);
      city.innerText = `${data.name}`;
      weather.innerText = `${temp}° `;
    });
}

function onGeoError() {
  alert('위치를 받아오지 못했습니다. 다시 시도해주세요.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
