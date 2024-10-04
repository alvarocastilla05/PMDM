$(document).ready(function(){

    let i = 1;

    //AGREGAR FILA
    $(document).on("click", "#addRow", function(){
        $("#table").each(function(){
            $("#table tbody").append("<tr><td><p>Nuevo Dato</p><button class='btn-delete-row'>Eliminar fila</button></td></tr>");
        })
    })

    //ELIMINAR FILA
    $(document).on("click", ".btn-delete-row", function(){
        $(this).parent().parent().remove();
    })

    //AGREGAR COLUMNA
    $(document).on("click", "#addColumn", function(){
        $("#table").each(function(){
            $("#table tr").append("<td><p>Nuevo dato</p><button class='btn-delete-row'>Eliminar fila</button></td>");
        })
    })

    //ELIMINAR COLUMNA
    $(document).on("click", "#removeColumn", function(){
        $("#table td:last-child").remove();
    })

    

})