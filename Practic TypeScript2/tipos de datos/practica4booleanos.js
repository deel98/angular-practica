var esnuevo = false;
var deseaimprimir = true;
var aceptadescuento = (15 + 19 == 33);
var juan = "juan";
var juan2 = "juan";
var listanumero1 = 100;
var listanumero2 = 100;
var sonombresiguales = (juan == juan2);
console.log("este booleano es: ", sonombresiguales);
console.log("este booleano es: ", aceptadescuento);
var ambosonverdaderos = sonombresiguales || aceptadescuento;
console.log("el reultado de los dos booleanos es", ambosonverdaderos);
var listanumero1 = 100;
var listanumero2 = 100;
var listasiguales = listanumero1 != listanumero2;
console.log("las listas no son iguales", listasiguales);
var algunaverdera = sonombresiguales || ambosonverdaderos || listasiguales || aceptadescuento;
console.log("es alguno verdadero", algunaverdera);
var todasverdadera = sonombresiguales && ambosonverdaderos && listasiguales && aceptadescuento;
console.log("todas son verdaderas", todasverdadera);
