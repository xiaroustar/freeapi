"use strict";
$(document).ready(function(){

	/* -----  Knob  ----- */
	$(".xp-knob").knob();

	function clock() {
		var $s = $(".second"),
		    $m = $(".minute"),
		    $h = $(".hour");
		    var d = new Date(),
		    s = d.getSeconds(),
		    m = d.getMinutes(),
		    h = d.getHours();
		$s.val(s).trigger("change");
		$m.val(m).trigger("change");
		$h.val(h).trigger("change"); 
		setTimeout(clock, 1000);       
	}
	clock();
});