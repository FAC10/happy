$(document).ready(function(){
  $(".intro-Container-Heading").delay(250).animate({ opacity: 1 }, 2000)
  $(".intro-Container-Text").delay(250).animate({
    opacity: 1 }, 4000)

  function fadeColour(){
    $("body").css("background", "linear-gradient(#e8bceb, #91cfcf)");
  }

  $('.memButton').on( "click", fadeBackground);
})


function fadeBackground(e){
  e.preventDefault();
  setTimeout(function () {
    window.location.href = "./home.html"
  }, 1000);
  $('body').fadeTo('slow', 0.3, function()
  {
      $('body').css('background', 'linear-gradient(#e8bceb, #91cfcf)');
  }).delay(10000).fadeTo('slow', 1);
}
