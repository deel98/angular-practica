interface alumnos {
    nombre:string;
    edad:number;
}

var listadonombres: Array<string> = ["David", "Daniel", "Juan"];

var listadonumeros: Array<number> = [12,24,38];


console.log(listadonombres[2])

var listadoalumnos: Array<alumnos> = [
  
    {
        nombre:"David",
        edad:22
    },

    {
        nombre:"Daniel",
        edad:23
    },
    
    {
        nombre:"Juan",
        edad: 24
    },
    {
        nombre: "Freddy",
        edad:25 
    }


]

console.log(listadoalumnos[0].edad +" "+ listadoalumnos[1].nombre)