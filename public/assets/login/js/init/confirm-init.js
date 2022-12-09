 (function() {

    "use strict";

    // Simple Dialogs
    $('#simple-dialog').on('click', function () {
        $.alert({
            title: 'Alert!',
            content: 'Simple alert!',
        });
    });

    // confirm Dialogs
    $('#confirm-dialog').on('click', function () {
        $.confirm({
            title: 'Confirm!',
            content: 'Simple confirm!',
            buttons: {
                confirm: function () {
                    $.alert('Confirmed!');
                },
                cancel: function () {
                    $.alert('Canceled!');
                },
                somethingElse: {
                    text: 'Something else',
                    btnClass: 'btn-blue',
                    keys: ['enter', 'shift'],
                    action: function(){
                        $.alert('Something else?');
                    }
                }
            }
        });
    });

    // prompt using confirm
    $('#prompt-confirm-dialog').on('click', function () {
        $.confirm({
            title: 'Prompt!',
            content: '' +
            '<form action="" class="formName">' +
            '<div class="form-group">' +
            '<label>Enter something here</label>' +
            '<input type="text" placeholder="Your name" class="name form-control" required />' +
            '</div>' +
            '</form>',
            buttons: {
                formSubmit: {
                    text: 'Submit',
                    btnClass: 'btn-blue',
                    action: function () {
                        var name = this.$content.find('.name').val();
                        if(!name){
                            $.alert('provide a valid name');
                            return false;
                        }
                        $.alert('Your name is ' + name);
                    }
                },
                cancel: function () {
                    //close
                },
            },
            onContentReady: function () {
                // bind to events
                var jc = this;
                this.$content.find('form').on('submit', function (e) {
                    // if the user submits the form by pressing enter in the field.
                    e.preventDefault();
                    jc.$$formSubmit.trigger('click'); // reference the button and click it
                });
            }
        })
    });

    // Without button
    $('#btn-without-dialog').on('click', function () {
       $.dialog({
        title: 'Text content!',
        content: 'Simple modal!',
    });
   });

    // Button dialog
    $('#btn-dialog').on('click', function () {
       $.confirm({
        buttons: {
            hey: function () {
                // here the button key 'hey' will be used as the text.
                $.alert('You clicked on "hey".');
            },
            heyThere: {
                text: 'hey there!', // With spaces and symbols
                action: function () {
                    $.alert('You clicked on "heyThere"');
                }
            }
        }
    });
   });

    // Button keys dialog
    $('#btn-keys-dialog').on('click', function () {
       $.confirm({
        content: 'Time to use your keyboard, press shift, alert, A or B',
        buttons: {
            specialKey: {
                text: 'On behalf of shift',
                keys: ['shift', 'alt'],
                action: function(){
                    $.alert('Shift or Alt was pressed');
                }
            },
            alphabet: {
                text: 'A, B',
                keys: ['a', 'b'],
                action: function(){
                    $.alert('A or B was pressed');
                }
            }
        }
    });
   });
    // Button1 keys dialog
    $('#btn1-keys-dialog').on('click', function () {
        $.confirm({
            title: false,
            content: 'Imagine a very critical action here! <br> ' +
            'Please press <strong style="font-size: 20px;">Y</strong> to proceed.',
            buttons: {
                yes: {
                    isHidden: true, // hide the button
                    keys: ['y'],
                    action: function () {
                        $.alert('Critical action <strong>was performed</strong>.');
                    }
                },
                no: {
                    keys: ['N'],
                    action: function () {
                        $.alert('You clicked No.');
                    }
                },
            }
        });

    });
    //error-dialog dialog
    $('#error-dialog').on('click', function () {
        $.confirm({
            title: 'Encountered an error!',
            content: 'Something went downhill, this may be serious',
            type: 'red',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Try again',
                    btnClass: 'btn-red',
                    action: function(){
                    }
                },
                close: function () {
                }
            }
        });

    });
    //sucess-dialog dialog
    $('#sucess-dialog').on('click', function () {
        $.confirm({
            title: 'Congratulations!',
            content: 'Consider something great happened, and you have to show a positive message.',
            type: 'green',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Sucess',
                    btnClass: 'btn-green',
                    action: function(){
                    }
                },
                close: function () {
                }
            }
        });

    });

    //Close icon dialog
    $('#close-icon-dialog').on('click', function () {
        $.confirm({
            closeIcon: true
        });
    });

    //Handle closeIcon's callback
    $('#handle-dialog').on('click', function () {
        $.confirm({
            closeIcon: function(){
                return false; // to prevent close the modal.
                // or
                return 'aRandomButton'; // set a button handler, 'aRandomButton' prevents close.
            },
            // or
            closeIcon: 'aRandomButton', // set a button handler
            buttons: {
                aRandomButton: function(){
                    $.alert('A random button is called, and i prevent closing the modal');
                    return false; // you shall not pass
                },
                close: function(){
                }
            }
        });
    });

    //Draggable callback
    $('#draggable-dialog').on('click', function () {
        $.confirm({
            title: 'Hello there',
            content: 'click and hold on the title to drag',
            draggable: true,
        });
    });



})();