$(document).ready(function(){
  $(".search").delay(250).animate({ opacity: 1 }, 2000)
  $(".searchBar").delay(250).animate({ opacity: 1 }, 2800)

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
