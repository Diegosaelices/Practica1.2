var correo=prompt("Dime tu direccion de correo");
var trozos=correo.split('@');
console.log(trozos[0].trim());