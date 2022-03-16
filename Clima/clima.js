var lat = document.getElementById("lat");
var lon = document.getElementById("lon");
var buttonLatLon = document.getElementById("calcularLatLon");
var buttonClimate = document.getElementById("checarClima");
var clima = document.getElementById("clima");

buttonLatLon.addEventListener("click", function(){
	navigator.geolocation.getCurrentPosition(function(position) {
	    let lati = position.coords.latitude;
	    let long = position.coords.longitude;
	    console.log(lati.toFixed(2));
	    console.log(long.toFixed(2));
	    lat.value = lati.toFixed(2);
	    lon.value = long.toFixed(2);
	  });
	});
buttonClimate.addEventListener("click", function(){
	fetch("http://api.openweathermap.org/data/2.5/weather?lat="+lat.value+"&lon="+lon.value+"100&appid=95247eb54a479f0788dd40295d4ba5e4")
	.then(function(response){
		response.json().then(function(respjson){
			clima.innerText = JSON.stringify(respjson);
			console.log(respjson);
		});
	})
	.catch(err=>{
		console.log(err);
	});
});
