var listadousuario = [
    {
        nombre: "david",
        apellido: "cantu"
    },
    {
        nombre: "daniel",
        apellido: "pérez"
    },
    {
        nombre: "juan",
        apellido: "de la barrera"
    }
];
//crear una instacia o objeto
for (var _i = 0, listadousuario_1 = listadousuario; _i < listadousuario_1.length; _i++) {
    var xs = listadousuario_1[_i];
    console.log("hola", xs.nombre),
        console.log("nos alegra tenerte de nuevo", xs.apellido);
}
