$(document).ready(function(){
  if($('.modal').hasClass('show') && $('.menu-open:checked')) {
    $('.menu-open').prop('checked', false);
  }
})
