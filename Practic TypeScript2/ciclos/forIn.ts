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

for(let posicion in listadousuario){
    console.log(listadousuario[posicion].nombre)
    
}