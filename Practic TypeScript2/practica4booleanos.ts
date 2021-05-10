var esnuevo:boolean = false;
var deseaimprimir:boolean = true;
var aceptadescuento:boolean = (15+19 == 33)


var juan = "juan";
var juan2 = "juan";

var listanumero1 = 100;
var listanumero2 = 100;

var sonombresiguales:boolean = (juan == juan2);

console.log("este booleano es: " , sonombresiguales);
console.log("este booleano es: " , aceptadescuento);

var ambosonverdaderos:boolean = sonombresiguales || aceptadescuento;
console.log("el reultado de los dos booleanos es", ambosonverdaderos);

var listanumero1 = 100;
var listanumero2 = 100;

var listasiguales:boolean = listanumero1 != listanumero2;
console.log("las listas no son iguales", listasiguales);

var algunaverdera:boolean = sonombresiguales || ambosonverdaderos || listasiguales || aceptadescuento
console.log("es alguno verdadero", algunaverdera);

var todasverdadera:boolean = sonombresiguales && ambosonverdaderos && listasiguales && aceptadescuento
console.log("todas son verdaderas", todasverdadera);