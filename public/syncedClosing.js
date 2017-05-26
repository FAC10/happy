var body = document.getElementsByTagName('body')[0];

body.onclick = function() {
    // if($('.modal').hasClass('show') && $('.menu-open:checked')) {
    //   console.log('hi')
    //   // $('.modal').removeClass('show');
    // }
    if ($('.modal').hasClass('show')) {
      $('.menu-open').prop('disabled', true);
    }
    if (!$('.modal').hasClass('show')) {
      $('.menu-open').prop('disabled', false);
    }
}
