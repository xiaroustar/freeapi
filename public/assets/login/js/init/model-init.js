'use strict';
$(document).ready(function() {
     
	$('#xp-varying-modal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget)
		var recipient = button.data('whatever')
		var modal = $(this)
		modal.find('.modal-title').text('New message to ' + recipient)
		modal.find('.modal-body input').val(recipient)
	})

	$('.xp-model-animation-btn').on('click', function(br) {	
		$('.modal .modal-dialog').attr('class', 'modal-dialog  ' + $(this).data("animation") + '  animated');
	});

});