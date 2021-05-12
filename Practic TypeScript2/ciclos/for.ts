var listadonombres:Array<string> = ["juan", "david", "alba","alejandra", "marcela", "pablo", "enrique"]

console.log(listadonombres)


//mientras cantidadrepettir sea menor que el listado de nombres, se va repetir hasta que finalize su objetivo que es la lista
for (var cantidadrepetir:number = 1  ; cantidadrepetir < listadonombres.length;  cantidadrepetir++){

    console.log("bienvenido", listadonombres[cantidadrepetir])
}