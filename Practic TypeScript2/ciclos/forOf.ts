interface Usuario{
    nombre:string;
    apellido:string;
}

var listadousuario:Array<Usuario> = [
{
    nombre:"david",
apellido:"cantu"
},
{
    nombre: "daniel",
    apellido:"pérez"
},
{
    nombre:"juan",
    apellido:"de la barrera"
}
]
//crear una instacia o objeto
for (let xs of listadousuario) {
    console.log("hola", xs.nombre),
    console.log("nos alegra tenerte de nuevo", xs.apellido)
}
