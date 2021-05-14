var alumnos = [];
alumnos.push({ nombre: "juan", apellido: "escalante" });
alumnos.push({ nombre: "joan", apellido: "perales" });
alumnos.push({ nombre: "david", apellido: "reyes" });
alumnos.splice(0, 1);
alumnos.forEach(function (alumno) {
    console.log(alumno.apellido);
});
//var.forEach((funcion)=>{}));
//(())=>{}
