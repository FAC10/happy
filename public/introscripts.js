$(document).ready(function(){
  $(".intro-Container-Text").delay(100).animate({
    opacity: 1 }, 2000)
  $(".nextButton").delay(400).animate({ opacity: 1 }, 2000)

  $('.memButton').on( "click", fadeAway);
})


function fadeAway(e){
  e.preventDefault();
  setTimeout(function () {
    window.location.href = "./home.html"
  }, 1500);
  $(".intro-Container-Heading").delay(250).animate({ opacity: 0 }, 1000)
  $(".intro-Container-Text").delay(250).animate({
    opacity: 0 }, 1000)
  $(".nextButton").delay(250).animate({
      opacity: 0 }, 1000)
}
