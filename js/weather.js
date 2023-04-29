const API_KEY = "c862c3099b0324626bd7075d12cb7d47"
function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  // console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  console.log(url)
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector('#wheather span:first-child')
      const weather = document.querySelector('#wheather span:last-child')
      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}
function onGeoError() {
  console.log("날씨를 찾을 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)