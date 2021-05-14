var nombres: string[] = ["ana", "maria", "julia", "juan"];
var numeros: number[] = [20, 21, 22, 13, 41];

nombres.push("nuevo nombre");
numeros.push(39, 40);
console.log(nombres);
console.log(numeros);

interface alumno {
  nombre: string;
  apellido: string;
}

var alumnos: alumno[] = [];

alumnos.push({ nombre: "carmen", apellido: "polanco" });

var ana: alumno = {
  nombre: "ana",
  apellido: "escalante",
};

var edson: alumno = {
  nombre: "edson",
  apellido: " guerrero",
};

alumnos.push(ana);
alumnos.push(edson);
console.log(alumnos);
