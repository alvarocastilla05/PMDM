$(document).ready(function(){

    $(document).on("click", "#modo-oscuro", function(){
        $("body").attr("style", "background-color: black");
    });

    $(document).on("click", "#modo-dia", function(){
        $("body").attr("style", "background-color: white");
    })
})