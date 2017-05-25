$(document).ready(function(){
  $(".search").delay(250).animate({ opacity: 1 }, 1800)
  $(".searchBar").delay(250).animate({ opacity: 1 }, 2550)
  $(".menu-open-button").delay(250).animate({ opacity: 1 }, 1000)
  $(".menu-item").delay(1250).animate({ opacity: 1 }, 0)

  function expand() {
    $(".search").toggleClass("closeSearch");
    $(".searchBar").toggleClass("square");
    if ($(".tags").hasClass("shownTag")) {
      $(".tags").toggleClass("shownTag");
    } else {
      setTimeout(showTags, 1000);
    }
    if ($('.search').hasClass('close')) {
      $('input').focus();
    } else {
      $('input').blur();
    }
  }
  $('button').on('click', expand);
})

function showTags(){
  $(".tags").toggleClass("shownTag");
}
