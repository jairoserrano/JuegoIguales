var tempA;
var tempB;
var ganador;


$(".igboton").click(function() {

    if (tempA != null && tempB != null){

        if(ganador!=true){
            tempA.removeClass("btn-danger");
            tempB.removeClass("btn-danger");

            tempA.addClass("btn-primary");
            tempB.addClass("btn-primary");

            tempA.text("");
            tempB.text("");

            tempA   = null;
            tempB   = null;
            ganador = false;
        }else{

        }
    }

    if (tempA==null){

        tempA = $(this);
        $(this).removeClass("btn-primary");
        $(this).addClass("btn-warning");
        $(this).text($(this).val());

    //alert("Toma otro botón");
    }else{
        if($(this).val()==tempA.val() && $(this)==tempA){

            $(this).text($(this).val());

            $(this).removeClass("btn-warning");
            tempA.removeClass("btn-warning");

            $(this).addClass("btn-success");
            tempA.addClass("btn-success");

            ganador = true;

        }else{

            tempB = $(this);
            tempB.text(tempB.val());

            tempB.addClass("btn-primary");
            tempB.removeClass("btn-warning");
            
            tempA.addClass("btn-primary");
            tempA.removeClass("btn-warning");

            tempB = $(this);
            tempB.addClass("btn-danger").fadeIn(1);
            $(this).addClass("btn-danger");

        //alert("De nuevo");
        }
        
    }
});











