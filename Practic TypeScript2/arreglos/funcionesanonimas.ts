interface Alumno {
  nombre: string;
  apellido: string;
}
var alumnos: Alumno[] = [];

alumnos.push({ nombre: "juan", apellido: "escalante" });

alumnos.push({ nombre: "joan", apellido: "perales" });

alumnos.push({ nombre: "david", apellido: "reyes" });

alumnos.splice(0, 1);

alumnos.forEach((alumno) => {
  console.log(alumno.apellido);
});

//var.forEach((funcion)=>{}));
//(())=>{}
