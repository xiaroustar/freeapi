"use strict";
$(document).ready(function() {    

    /* -----  Form - Color Picker ----- */
     $('#xp-default-color').colorpicker({
     	format: 'auto'
     });

     $('#xp-rgb-color').colorpicker();

     $('#xp-initial-color').colorpicker({
     	format: 'auto'
     });

     $('#xp-initial-rgb-color').colorpicker();

     $('#xp-horizontal-color').colorpicker({
     	format: 'auto',
     	horizontal: true
     });

     $('#xp-transparent-color').colorpicker({
     	format: 'auto'
     });
});