$(document).ready(function(){

    var i = 1;

    //AGREGAR PÁRRAFOS
    $(document).on("click", "#btn-add-paragraph", function(){
        $("#content").append("<div class=\"texto\"><p>"+ i +"->Lorem ipsum</p><button class=\"Eliminar\">Eliminar</button></div>")
        i++;
    });

    //ELIMINAR PÁRRAFOS
    $(document).on("click", ".Eliminar", function(){
        $(this).parent().remove();
    })
});