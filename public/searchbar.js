$(document).ready(function(){
  $(".search").delay(250).animate({ opacity: 1 }, 1800)
  $(".searchBar").delay(250).animate({ opacity: 1 }, 2550)
  $(".menu-open-button").delay(250).animate({ opacity: 1 }, 1000)
  $(".menu-item").delay(1250).animate({ opacity: 1 }, 0)
  $(".shuffle").delay(250).animate({ opacity: 1 }, 1800)

  function expand() {
  setTimeout(function () {
    $('.shuffle').toggleClass('hidden');
  }, 500);
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

function checkIfSafari(){
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent .indexOf('safari')!=-1){
     if(userAgent .indexOf('chrome')  > -1){
       console.log('you are using chrome');
     }else if((userAgent .indexOf('opera')  > -1)||(userAgent .indexOf('opr')  > -1)){
       console.log('should be opera', userAgent);
     }else{
//        Uncomment the below code when user testing so it shows on iphone:
//       $(".shownTag").css("bottom", "75%")
//       $(".tags").css("bottom", "75%")
     }
  }
}
  checkIfSafari();
})

function showTags(){
  $(".tags").toggleClass("shownTag");
}
