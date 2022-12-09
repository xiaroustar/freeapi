"use strict";
$(document).ready(function() { 

$.sidebarMenu = function(menu) {
  var animationSpeed = 300,
    subMenuSelector = '.xp-vertical-submenu';

  $(menu).on('click', 'li a', function(e) {
    var $this = $(this);
    var checkElement = $this.next();

    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
      checkElement.slideUp(animationSpeed, function() {
        checkElement.removeClass('menu-open');
      });
      checkElement.parent("li").removeClass("active");
    }
    
    else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {      
      var parent = $this.parents('ul').first();      
      var ul = parent.find('ul:visible').slideUp(animationSpeed);      
      ul.removeClass('menu-open');      
      var parent_li = $this.parent("li");
      
      checkElement.slideDown(animationSpeed, function() {        
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
      });
    }

    if (checkElement.is(subMenuSelector)) {
      e.preventDefault();
    }
  });
}

});