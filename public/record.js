document.addEventListener("DOMContentLoaded", function(event) {

  $('#pencil').on('click', () => {
    setTimeout(function () {
        $('.record-text').show();
    }, 1300);
    $('.menu-open-button').on('click', () => {
      $('.record-text').hide();
      $('.record--submit').val('Save');
      $('.record--text').prop('disabled', false);
      $('.record--text').val('');
      $('.record--text').css('background-color','#fff');
    });
  });

  $('#camera').on('click', () => {
    setTimeout(function () {
        $('.record-photo').show();
    }, 1300);
    $('.menu-open-button').on('click', () => {
      $('.record-photo').hide();
    });
  });

  $('#microphone').on('click', () => {
    setTimeout(function () {
        $('.record-voice').show();
    }, 1300);
    $('.menu-open-button').on('click', () => {
      $('.record-voice').hide();
    });
  });

  $('.record--submit').on('click', () => {
    $('.record--submit').val('Saved!');
    $('.record--text').prop('disabled', true);
    $('.record--text').css('background-color','#fafafa');
  });

});
