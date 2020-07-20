
const OpenWeatherKey = '99e97d5319a0524461401ece10087838';
const Kelvin = 273;

let inputLocations = ['New York', '10005', 'Tokyo', 'São Paulo', 'Pluto', 'Somewhere', 'San Francisco'];

for(let i = 0; i < inputLocations.length; i++) {
  let currentLocation = inputLocations[i];
  getWeather(currentLocation);
}

function getWeather(currentLocation) {
  let API = `http://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&APPID=${OpenWeatherKey}`;
  
  fetch(API)
  .then(function(response){ 
    let data = response.json();
    return data;
  } )
  .then(function(data){
    if(data.cod == "404") {
      console.log("404 ERROR: \"" + currentLocation + "\" is not a valid location.")
    } else {
      let date = new Date(data.dt + 1000*data.timezone)
        console.log(data.name + ", " + data.sys.country)
        console.log(date.toISOString())
        console.log(Math.floor(data.main.temp - 273) + " Celsius")
        console.log(data.weather)
    }
    
  } )
}
