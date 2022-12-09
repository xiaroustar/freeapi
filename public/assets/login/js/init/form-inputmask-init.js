"use strict";
$(document).ready(function() {    

    /* -----  Form - Input Mask ----- */
    $('#xp-inputmask-date').inputmask("date");

    $('#xp-inputmask-time').inputmask("hh:mm");

    $('#xp-inputmask-datetime').inputmask("datetime");

    $('#xp-inputmask-phone').inputmask("(99) 999-999-9999");

    $('#xp-inputmask-zipcode').inputmask("999999");

    $('#xp-inputmask-email').inputmask("email");

    $('#xp-inputmask-decimal').inputmask("decimal");

    $('#xp-inputmask-currency').inputmask("currency");

    $('#xp-inputmask-ip').inputmask("999.999.999.999");

    $('#xp-inputmask-card-number').inputmask("9999 9999 9999 9999");

    $('#xp-inputmask-card-cvv').inputmask("999");

    $('#xp-inputmask-card-date').inputmask("99/99");

});