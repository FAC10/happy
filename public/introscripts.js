$(document).ready(function(){
  $(".intro-Container-Heading").delay(250).animate({ opacity: 1 }, 2000)
  $(".intro-Container-Text").delay(250).animate({
    opacity: 1 }, 4000)

  $('.memButton').on( "click", fadeBackground);
})


function fadeBackground(e){
  e.preventDefault();
  setTimeout(function () {
    window.location.href = "./home.html"
  }, 2000);
  $(".intro-Container-Heading").delay(250).animate({ opacity: 0 }, 1500)
  $(".intro-Container-Text").delay(250).animate({
    opacity: 0 }, 1500)
}
