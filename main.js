//Map locations

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FpbnQyNiIsImEiOiJja21ramZ5bGUxMXRkMm9xdmVzMG1uZXNpIn0.nYWF-3rVptZVhsnbGpHyBw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-101.87289834891641, 39.7112336501302],
    zoom: 4
  
  });

//Kennedy Space Center
  document.getElementById('kennedy').addEventListener('click', function () {
    map.fitBounds([
      [-80.75450947670474, 28.537041990624683],
      [-80.59837274661177, 28.689532095587985]
    ]);
});

//Edwards Air Force Base
document.getElementById('edwards').addEventListener('click', function () {
  map.fitBounds([
    [-118.02156507210063, 34.8427784118307],
    [-117.85488187730549, 34.982137712506194]
  ]);
});

//Weather Kennedy Space Center

function getAPIdata() {
    

	var request = 'https://api.openweathermap.org/data/2.5/find?lat=28.615135925416816&lon=-80.694108&appid=f12956f0870834466faa2c2f8f4249e9';


	fetch(request)	
	
	.then(function(response) {
		return response.json();
	})
	.then(function(response) {
		console.log(response);
		var weatherBox = document.getElementById('weatherKennedy');
        var hum = 'Humidity:'+ response.list[0].main.humidity + '%'
		var degC = Math.floor(response.list[0].main.temp - 273.15);
	    var weatherBox = document.getElementById('weatherKennedy');
		weatherBox.innerHTML = degC + '&#176;C <br>' + 'Condition:' + response.list[0].weather[0].description +' <br>' + hum;
	});
}

//Weather Edwartds Air Force Base
var request = 'https://api.openweathermap.org/data/2.5/find?lat=34.905556&lon=-117.883611&appid=f12956f0870834466faa2c2f8f4249e9';


fetch(request)	

.then(function(response) {
	return response.json();
})
.then(function(response) {
	console.log(response);
	var weatherBox = document.getElementById('weatherEdwards');
	var hum = 'Humidity:'+ response.list[1].main.humidity + '%'
	var degC = Math.floor(response.list[1].main.temp - 273.15);
	var weatherBox = document.getElementById('weatherEdwards');
	weatherBox.innerHTML = degC + '&#176;C <br>' + 'Condition:' + response.list[1].weather[0].description +' <br>' + hum;
});

getAPIdata();

