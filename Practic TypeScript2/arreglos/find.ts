interface Alumnoo {
  alumnoid: number;
  nombre: string;
  apellido: string;
}
var alumnos: Alumnoo[] = [];

alumnos.push({ alumnoid: 1, nombre: "juan", apellido: "escalante" });

alumnos.push({ alumnoid: 2, nombre: "joan", apellido: "perales" });

alumnos.push({ alumnoid: 3, nombre: "david", apellido: "reyes" });

var alumnosencontrados = alumnos.find((alumno) => {
  //return alumno.alumnoid == 2;
  return alumno.apellido.includes("per");
});

console.log(alumnosencontrados);
