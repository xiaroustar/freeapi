"use strict";
$(document).ready(function(){

    /* -----  Table - Datatable  ----- */
    $('#datatable').DataTable();

    $('#xp-default-datatable').DataTable( {
        "order": [[ 3, "desc" ]]
    } );
    
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    });

    table.buttons().container()
    .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

});