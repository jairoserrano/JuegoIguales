/**
 * tempA es la casilla primera pulsada
 * tempB es la casilla segunda pulsada
 * ganador es true si existe un ganador
 * 
 */
var tempA;
var tempB;
var ganador;
var ganadas=0;
var intentos=0;


$(".igboton").click(function() {

    if (tempA==null){
        tempA = $(this);
        tempA.text(tempA.val());
        console.log("asignada ficha 1");
        tempA.removeClass("btn-primary").addClass("btn-warning");
    }else if(tempA!=null & tempB==null){
        tempB = $(this);
        tempB.text(tempB.val());
        console.log("asignada ficha 2");
        tempB.removeClass("btn-primary").addClass("btn-warning");
        setTimeout (function (){
            if(tempA.val()==tempB.val()){
                ganador=true;
                console.log("hay un ganador");
                tempA.removeClass("btn-warning").addClass("btn-success");
                tempB.removeClass("btn-warning").addClass("btn-success");
                ganadas++;
                console.log("Ganadas: "+ganadas);
            }else{
                ganador=false;
                console.log("No hay ganador");
                tempA.removeClass("btn-warning").addClass("btn-primary");
                tempB.removeClass("btn-warning").addClass("btn-primary");
                tempA.text("");
                tempB.text("");
                intentos++;
                console.log("Intentos: "+intentos);
            }
            tempA=null;
            tempB=null;
        }, 200 );
            
    }
    $("#ganadas").text("Aciertos: "+ganadas.toString());
    $("#intentos").text("Intentos: "+intentos.toString());
    
});




