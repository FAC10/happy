$(document).ready(function(){
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
