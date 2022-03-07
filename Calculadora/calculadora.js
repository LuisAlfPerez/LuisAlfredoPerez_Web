function sumar() {
	var result = document.getElementById("result");
	var num1 =  document.getElementById("num1").value;
	var num2 =  document.getElementById("num2").value;
	let res = parseFloat(num1) + parseFloat(num2);
	result.innerHTML = "El resultado es: "+res;
}
function restar() {
	var result = document.getElementById("result");
	var num1 =  document.getElementById("num1").value;
	var num2 =  document.getElementById("num2").value;
	let res = num1 - num2;
	result.innerHTML = "El resultado es: "+res;
}
function multiplicar() {
	var result = document.getElementById("result");
	var num1 =  document.getElementById("num1").value;
	var num2 =  document.getElementById("num2").value;
	let res = num1 * num2;
	result.innerHTML = "El resultado es: "+res;
}
function dividir() {
	var result = document.getElementById("result");
	var num1 =  document.getElementById("num1").value;
	var num2 =  document.getElementById("num2").value;
	let res = num1 / num2;
	result.innerHTML = "El resultado es: "+res;
}