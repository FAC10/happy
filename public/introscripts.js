$(document).ready(function(){
  $(".intro-Container-Text1").delay(250).animate({
    opacity: 1 }, 500)
    $(".intro-Container-Text2").delay(1150).animate({
      opacity: 1 }, 500)
      $(".intro-Container-Text3").delay(2050).animate({
        opacity: 1 }, 500)
  $(".nextButton").delay(2700).animate({ opacity: 1 }, 800)

  $('.memButton').on( "click", fadeAway);
})


function fadeAway(e){
  e.preventDefault();
  setTimeout(function () {
    window.location.href = "./login.html"
  }, 1500);
  $(".intro-Container-Heading").delay(250).animate({ opacity: 0 }, 1000)
  $(".intro-Container-Text1, .intro-Container-Text2, .intro-Container-Text3").delay(250).animate({
    opacity: 0 }, 1000)
  $(".nextButton").delay(250).animate({
      opacity: 0 }, 1000)
}
