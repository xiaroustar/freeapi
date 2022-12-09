"use strict";
$(document).ready(function(){

  $('#list-group').html(localStorage.getItem('list-group'));
  
  $('#list-group').append("<li class='list-group-item'><div class='custom-control custom-checkbox'><input type='checkbox' class='custom-control-input checkbox' id='customCheckItem1' checked='checked'/><label class='custom-control-label f-w-4' for='customCheckItem1'>Creating creative widgets</label><a class='xp-to-do-list-remove'><i class='mdi mdi-close'></i></a></div></li><li class='list-group-item'><div class='custom-control custom-checkbox'><input type='checkbox' class='custom-control-input checkbox' id='customCheckItem2' /><label class='custom-control-label f-w-4' for='customCheckItem2'>Build a new website</label><a class='xp-to-do-list-remove'><i class='mdi mdi-close'></i></a></div></li><li class='list-group-item'><div class='custom-control custom-checkbox'><input type='checkbox' class='custom-control-input checkbox' id='customCheckItem3' checked='checked' /><label class='custom-control-label f-w-4' for='customCheckItem3'>Landing page testing</label><a class='xp-to-do-list-remove'><i class='mdi mdi-close'></i></a></div></li><li class='list-group-item'><div class='custom-control custom-checkbox'><input type='checkbox' class='custom-control-input checkbox' id='customCheckItem4' /><label class='custom-control-label f-w-4' for='customCheckItem4'>Template designing</label><a class='xp-to-do-list-remove'><i class='mdi mdi-close'></i></a></div></li><li class='list-group-item'><div class='custom-control custom-checkbox'><input type='checkbox' class='custom-control-input checkbox' id='customCheckItem5' checked='checked' /><label class='custom-control-label f-w-4' for='customCheckItem5'>Uploading employee details</label><a class='xp-to-do-list-remove'><i class='mdi mdi-close'></i></a></div></li><li class='list-group-item'><div class='custom-control custom-checkbox'><input type='checkbox' class='custom-control-input checkbox' id='customCheckItem6' checked='checked' /><label class='custom-control-label f-w-4' for='customCheckItem6'>Logo designing</label><a class='xp-to-do-list-remove'><i class='mdi mdi-close'></i></a></div></li><li class='list-group-item'><div class='custom-control custom-checkbox'><input type='checkbox' class='custom-control-input checkbox' id='customCheckItem7' /><label class='custom-control-label f-w-4' for='customCheckItem7'>Starting social media post</label><a class='xp-to-do-list-remove'><i class='mdi mdi-close'></i></a></div></li>");

  $('.add-items').submit(function(event) 
  {
    event.preventDefault();

    var item = $('#todo-list-item').val();

    if(item) 
    {
      $('#list-group').append("<li class='list-group-item'><div class='custom-control custom-checkbox'><input type='checkbox' class='custom-control-input checkbox' id='customCheck1" + item + "' /><label class='custom-control-label f-w-4' for='customCheck1" + item + "'>" + item + "</label><a class='xp-to-do-list-remove'><i class='mdi mdi-close'></i></a></div></li>");
      
      localStorage.setItem('listItems', $('#list-group').html());
      
      $('#todo-list-item').val("");
    }
    
  });

  $(document).on('change', '.checkbox', function() 
  {
    if($(this).attr('checked')) 
    {
      $(this).removeAttr('checked');
    } 
    else 
    {
      $(this).attr('checked', 'checked');
    }

    $(this).parent().toggleClass('completed');
    
    localStorage.setItem('listItems', $('#list-group').html());
  });

  $(document).on('click', '.xp-to-do-list-remove', function() 
  {
    $(this).parent().parent().remove();
    
    localStorage.setItem('listItems', $('#list-group').html());
  });

  $('#list-group').slimscroll({
      height: '370',
      position: 'right',
      size: "7px",
      color: '#CFD8DC'
  });

});