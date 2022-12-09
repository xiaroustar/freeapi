"use strict";
$(document).ready(function() {    

    /* -----  Form - MaxLength ----- */
    
    $('#xp-maxlength-default').maxlength({
          warningClass: "badge badge-success",
          limitReachedClass: "badge badge-danger"
    });

    $('#xp-maxlength-threshold').maxlength({
          threshold: 20,
          warningClass: "badge badge-success",
          limitReachedClass: "badge badge-danger"
    });

    $('#xp-maxlength-all-options').maxlength({
          alwaysShow: true,
          threshold: 10,
          warningClass: "badge badge-success",
          limitReachedClass: "badge badge-danger",
          separator: ' of ',
          preText: 'You have ',
          postText: ' chars remaining.',
          validate: true
   });

     $('#xp-maxlength-positions').maxlength({
          alwaysShow: true,
          warningClass: "badge badge-success",
          limitReachedClass: "badge badge-danger",
          placement: 'top-left'
     });

     $('#xp-maxlength-textarea').maxlength({
          alwaysShow: true,
          warningClass: "badge badge-success",
          limitReachedClass: "badge badge-danger"
     });

});