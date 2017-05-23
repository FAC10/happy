var tab = document.querySelector('.tabs').childNodes;
var signUpLink = tab[1].firstChild;
var loginLink = tab[3].firstChild;

var signUpContent = document.getElementById('signup-tab-content');
var loginContent = document.getElementById('login-tab-content');

signUpLink.addEventListener('click', function(e){
  e.preventDefault();
  signUpLink.classList.add('active');
  signUpContent.classList.add('active');
  loginLink.classList.remove('active');
  loginContent.classList.remove('active');
});

loginLink.addEventListener('click', function(e){
  e.preventDefault();
  loginLink.classList.add('active');
  loginContent.classList.add('active');
  signUpLink.classList.remove('active');
  signUpContent.classList.remove('active');
});
