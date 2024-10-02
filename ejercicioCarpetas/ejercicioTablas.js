$(document).ready(function() {
    // Añadir nueva fila
    $(document).on("click", "#addRow", function(){
        let row = $("<tr></tr>");
        $('#myTable thead th').each(function() {
            row.append('<div class=\"fila\"><button class=\"removeRow\">Eliminar</button><td>Nuevo dato</td></div>');
        });
        $('#myTable tbody').append(row);
    })

    //Eliminar Fila
    $(document).on("click", ".removeRow", function(){
        $(this).parent().remove();
    })

    // Añadir nueva columna
  

    $(document).on("click", "#addColumn", function(){
        //Añadir ColumnaCabecera
        $('#myTable thead tr').append('<th>Nueva Columna</th>');

        // Añadir celda a cada fila existente
        $('#myTable tbody tr').each(function() {
            $(this).append('<td>Nuevo dato</td>');
        });
    })

    // Eliminar última columna
    $('#removeColumn').click(function() {
        // Eliminar última columna en la cabecera
        $('#myTable thead th:last-child').remove();

        // Eliminar última celda en cada fila
        $('#myTable tbody tr').each(function() {
            $(this).find('td:last-child').remove();
        });
    });
});
