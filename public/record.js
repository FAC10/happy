document.addEventListener("DOMContentLoaded", function(event) {

  $('#camera').on('click', () => {
    setTimeout(function () {
        $('.record-photo').show();
    }, 1050);
    $('.menu-open-button').on('click', () => {
      $('.record-photo').hide();
    });
  });

  $('#microphone').on('click', () => {
    setTimeout(function () {
        $('.record-voice').show();
    }, 1050);
    $('.menu-open-button').on('click', () => {
      $('.record-voice').hide();
    });
  });

});
