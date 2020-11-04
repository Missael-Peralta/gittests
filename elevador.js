//declaracion de variable

var p=0;
var ultimopiso=6,pisoActual=3, pisodestino=5;

//subir piso
function subirpiso(){
    pisoActual ++;
}
//bajar de piso
function bajarpiso(){
    pisoActual --;
}
//abrir puerta
function abrirpuerta(){
    p=0;
    console.log("Se Ha llegado a el floor destino, puesta de acceso abierta");
    p=1;
}

//cerrar la puerta
function cerrarpuerta (){
    p=1;
    console.log("La puerta ha sido cerrada correctamente");
}
const destinodelpiso = function(){

    if(pisodestino>0  && pisodestino<=ultimopiso){

        if (pisoActual<pisodestino){
            cerrarpuerta();
            while(pisoActual<pisodestino){
                console.log("piso destino");
                subirpiso();
            }


        }
        return abrirpuerta();

    }

    if(pisoActual>pisodestino){
        cerrarpuerta();
        while(pisoActual>pisodestino){
            console.log("piso actual");
            bajarpiso();
        }
        return abrirpuerta();
    }
    
}
module.exports=destinodelpiso;
