 !function($) {
  "use strict";
    
     $("#xp-counter").countdown("2020/01/01", function(event) {
          $(this).html(
            event.strftime('<div><div class="xp-countdown-block"><span class="text-success font-40">%D</span><br><span class="text-muted font-16">Days</span></div><div class="xp-countdown-block"><span class="text-danger font-40">%H</span><br><span class="text-muted font-16">Hours</span></div><div class="xp-countdown-block"><span class="text-warning font-40">%M</span><br><span class="text-muted font-16">Minutes</span></div><div class="xp-countdown-block"><span class="text-info font-40">%S</span><br><span class="text-muted font-16">Seconds</span></div></div>')
          );
      });

}(window.jQuery);