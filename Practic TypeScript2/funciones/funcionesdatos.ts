function multipicar(numero1:number, numero2:number):number{
var total:number = numero1 * numero2;
return total;

}


//se crea una variable para meter los parametros de la funcion multiplicar
var resultadofuncion:number = 0;
resultadofuncion = multipicar(20,35);

console.log(resultadofuncion);
/////


function calcularpromedio(promedio1:number, promedio2:number, promedio3:number) : number{
    var promedio:number =(promedio1 + promedio2 + promedio3) / 3;
    return promedio;
    

}


var calcular:number = 0;
calcular = calcularpromedio(100,90,90);
console.log(calcular);