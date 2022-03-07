var nombre="LuisAlfredo"
var email="luisAlfredo@tec.mx"
var edad="23"

function getNombre() {
	console.log(nombre)
	var myName = document.getElementById("nombre");
	myName.innerHTML = nombre;
}

function getEmail() {
	console.log(nombre)
	var myEmail = document.getElementById("email");
	myEmail.innerHTML = '<b>'+email+'</b>';
}

function getEdad() {
	console.log(edad)
	var myAge = document.getElementById("edad");
	myAge.innerHTML = '<h1>'+edad+'</h1>';
	myAge.style.color = "#00F"
}