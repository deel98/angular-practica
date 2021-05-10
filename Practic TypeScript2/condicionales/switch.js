var cantidad = 30;
switch (cantidad) {
    case 40: {
        console.log("son 40");
        break;
    }
    case 35: {
        console.log("son 35");
        break;
    }
    case 30: {
        console.log("son 30");
        break;
    }
    case 25: {
        console.log("son 25");
        break;
    }
    default: {
        console.log("no se cumplio ninguna de las funciones");
    }
}
//1. Canciones
//2. Album
//3. Perfiles
var menu = 3;
var tipomenu;
(function (tipomenu) {
    tipomenu[tipomenu["canciones"] = 1] = "canciones";
    tipomenu[tipomenu["album"] = 2] = "album";
    tipomenu[tipomenu["perfiles"] = 3] = "perfiles";
})(tipomenu || (tipomenu = {}));
switch (menu) {
    case tipomenu.canciones: {
        console.log("accede a las canciones");
        break;
    }
    case tipomenu.album: {
        console.log("accede a los albumes");
        break;
    }
    case tipomenu.perfiles: {
        console.log("accede a los perfiles");
        break;
    }
    default: {
        console.log("no encontro ningún menú");
    }
}
