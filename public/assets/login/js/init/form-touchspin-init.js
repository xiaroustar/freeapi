"use strict";
$(document).ready(function() {    

    /* -----  Form - Touchspin ----- */
    
    $("#xp-touchspin-value-attribute").TouchSpin();

    $("#xp-touchspin-empty-value").TouchSpin();

    $("#xp-touchspin-postfix").TouchSpin({
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '%'
    });
    
    $("#xp-touchspin-prefix").TouchSpin({
        min: -1000000000,
        max: 1000000000,
        stepinterval: 50,
        maxboostedstep: 10000000,
        prefix: '$'
    });

    $("#xp-touchspin-value-attr-not-set").TouchSpin({
        initval: 40
    });

    $("#xp-touchspin-value-set-explicitly").TouchSpin({
        initval: 40
    });

    $("#xp-touchspin-vertical-btn").TouchSpin({
      verticalbuttons: true
    });

    $("#xp-touchspin-change-btn-class").TouchSpin({
        buttondown_class: "btn btn-rounded btn-primary",
        buttonup_class: "btn btn-rounded  btn-primary"
    });    

});