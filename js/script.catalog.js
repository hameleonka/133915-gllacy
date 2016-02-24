(function(){
var userSearch = document.querySelector(".user-search");
var searchItem = userSearch.querySelector("[name=search-item]");
var userLogin = document.querySelector(".user-login");
var userLoginForm = document.querySelector(".user-login-form");
var emailLoginForm = userLoginForm.querySelector("[name=e-mail]");
var passwordLoginForm = userLoginForm.querySelector("[name=password]");
var storageEmail = localStorage.getItem("email");

userSearch.addEventListener("mouseenter", function(event) {
  searchItem.focus();
});

userLogin.addEventListener("mouseenter", function(event) {
  if (storageEmail) {
    emailLoginForm.value = storageEmail;
    passwordLoginForm.focus();}
  else {
    emailLoginForm.focus();
  }
});

userLoginForm.addEventListener("submit", function(event) {
  event.preventDefault();
});

userLoginForm.addEventListener("submit", function(event) {
  if (!emailLoginForm || !passwordLoginForm) {
    event.preventDefault();
    console.log("Нужно ввести e-mail и пароль");}
  else {
    localStorage.setItem("email", emailLoginForm.value);
  }
});
}())
