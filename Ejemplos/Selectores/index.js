//Función que se va a realizar cuando cargue la página.
$(document).ready(function(){
    //Selector de etiqueta
    $("h1").html("adios mundo cruel");

    //Selector de ID (#)
    $("#page-title").html("Titulo Hola Mundo");

    //Selector de clase (.)
    $(".red").attr("style", "color:red");   //La propiedad attr lo que hace es darle una nueva propiedad a lo que seleccione.


    //Evento click
    $(document).on("click", "#btn-clear", function(){
        $("h1").html("");
    }); //Esto hace que elimine todo el texto de los H1

    $(document).on("click", "#btn-restore", function(){
        $("h1").html("adios mundo cruel");

        //Selector de ID (#)
        $("#page-title").html("Titulo Hola Mundo");
    
        //Selector de clase (.)
        $(".red").attr("style", "color:red");
    });

    $(document).on("click", "#add-yellow", function(){
        $("#page-title").addClass("yellow");
    });

    $(document).on("click", "#delete-yellow", function(){
        $("#page-title").removeClass("yellow");
    });
});