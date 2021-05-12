
class alumno{
nombre:string;
apellido:string;
edad:number;


/*constructor
cada que se crea una instancia el constructor tambien lo hara, sobrescribiendo cada objeto

*/
constructor(){
    this.nombre ="Pilar";
    this.apellido= "Aguilar";
    this.edad = 75;
    this.mostrarmensaje();
}

private mostrarmensaje() :void
    {

    console.log("hola", this.nombre + " " + this.apellido + " ,"+"que tenga buen día");
    }


asignar(nombreparametro:string, apellidoparametro:string, edadparametro:number){

    this.nombre = nombreparametro;
    this.apellido =apellidoparametro;
    this.edad = edadparametro;
    //this.mostrarmensaje();
}

}


var alumno1:alumno = new alumno();
/*alumno1.nombre = "David";
alumno1.apellido= "Cantú";
alumno1.edad= 200;
*/
alumno1.asignar("David", "Cantú", 22);
//alumno1.mostrarmensaje();

var alumno2:alumno = new alumno();
alumno2.asignar("Juan", "Escobedo", 38);
//alumno2.mostrarmensaje();

var alumno3:alumno = new alumno();
alumno3.asignar("Jesus", "Alonso", 45);

//cada objeto creado repercutira en el constructor que se le asignaron los mismos valores this.n..