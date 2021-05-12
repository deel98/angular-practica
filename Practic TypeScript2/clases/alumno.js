//inicio de la clase
var alumno = /** @class */ (function () {
    /*constructor
    cada que se crea una instancia el constructor tambien lo hara, sobrescribiendo cada objeto
    
    */
    function alumno() {
        this.nombre = "Pilar";
        this.apellido = "Aguilar";
        this.edad = 75;
        this.mostrarmensaje();
    }
    //metodos
    alumno.prototype.mostrarmensaje = function () {
        console.log("hola", this.nombre + " " + this.apellido + " ," + "que tenga buen día");
    };
    alumno.prototype.asignar = function (nombreparametro, apellidoparametro, edadparametro) {
        this.nombre = nombreparametro;
        this.apellido = apellidoparametro;
        this.edad = edadparametro;
        //this.mostrarmensaje();
    };
    return alumno;
}());
//fin de la clase
var alumno1 = new alumno();
/*alumno1.nombre = "David";
alumno1.apellido= "Cantú";
alumno1.edad= 200;
*/
alumno1.asignar("David", "Cantú", 22);
//alumno1.mostrarmensaje();
var alumno2 = new alumno();
alumno2.asignar("Juan", "Escobedo", 38);
//alumno2.mostrarmensaje();
var alumno3 = new alumno();
alumno3.asignar("Jesus", "Alonso", 45);
//cada objeto creado repercutira en el constructor que se le asignaron los mismos valores this.n..
