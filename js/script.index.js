(function(){
var btnFeedback = document.querySelector(".btn-feedback");
var popupFeedback = document.querySelector(".modal-content-feedback");
var closeFeedback = popupFeedback.querySelector(".modal-content-close");
var modalOverlay = document.querySelector(".modal-overlay");
var nameFeedback = popupFeedback.querySelector("[name=name]");
var emailFeedback = popupFeedback.querySelector("[name=e-mail]");
var textFeedback = popupFeedback.querySelector("textarea");
var hintForName = popupFeedback.querySelector(".hint-for-name");
var hintForEmail = popupFeedback.querySelector(".hint-for-email");
var hintForText = popupFeedback.querySelector(".hint-for-text");
var userSearch = document.querySelector(".user-search");
var searchItem = userSearch.querySelector("[name=search-item]");
var userLogin = document.querySelector(".user-login");
var userLoginForm = document.querySelector(".user-login-form");
var emailLoginForm = userLoginForm.querySelector("[name=e-mail]");
var passwordLoginForm = userLoginForm.querySelector("[name=password]");
var storageEmail = localStorage.getItem("email");


btnFeedback.addEventListener("click", function(event) {
  event.preventDefault();
  popupFeedback.classList.add("modal-content-feedback-show");
  modalOverlay.classList.add("modal-overlay-show");
  nameFeedback.focus();
});

closeFeedback.addEventListener("click", function(event) {
  event.preventDefault();
  popupFeedback.classList.remove("modal-content-feedback-show");
  modalOverlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupFeedback.classList.contains("modal-content-feedback-show")) {
      popupFeedback.classList.remove("modal-content-feedback-show");
      modalOverlay.classList.remove("modal-overlay-show");
    }
  }
});

modalOverlay.addEventListener("click", function(event) {
  event.preventDefault();
  if (popupFeedback.classList.contains("modal-content-feedback-show")) {
    popupFeedback.classList.remove("modal-content-feedback-show");
    modalOverlay.classList.remove("modal-overlay-show");
  }
});

nameFeedback.addEventListener("focus", function(event) {
  event.preventDefault();
  if (nameFeedback.value) {
    hintForName.classList.remove("hint-for-name-show-grey");
    hintForName.classList.add("hint-for-name-show-blue");
  }
  else {
    nameFeedback.removeAttribute("placeholder");
    hintForName.classList.add("hint-for-name-show-blue");
  }
});

nameFeedback.addEventListener("blur", function(event) {
  event.preventDefault();
  if (nameFeedback.value) {
    hintForName.classList.add("hint-for-name-show-grey");
    nameFeedback.classList.add("name-active");
  } else {
    nameFeedback.setAttribute("placeholder", "Как вас зовут");
    hintForName.classList.remove("hint-for-name-show-blue");
    nameFeedback.classList.remove("name-active");
  }
});



emailFeedback.addEventListener("focus", function(event) {
  event.preventDefault();
  if (emailFeedback.value) {
    hintForEmail.classList.remove("hint-for-email-show-grey");
    hintForEmail.classList.add("hint-for-emaile-show-blue");
  }
  else {
    emailFeedback.removeAttribute("placeholder");
    hintForEmail.classList.add("hint-for-email-show-blue");
  }
});

emailFeedback.addEventListener("blur", function(event) {
  event.preventDefault();
  if (emailFeedback.value) {
    hintForEmail.classList.add("hint-for-email-show-grey");
    emailFeedback.classList.add("email-active");
  } else {
    emailFeedback.setAttribute("placeholder", "Ваша почта для ответа?");
    hintForEmail.classList.remove("hint-for-email-show-blue");
    emailFeedback.classList.remove("email-active");
  }
});


textFeedback.addEventListener("focus", function(event) {
  event.preventDefault();
  if (textFeedback.value) {
    hintForText.classList.remove("hint-for-text-show-grey");
    hintForText.classList.add("hint-for-text-show-blue");
  }
  else {
    textFeedback.removeAttribute("placeholder");
    hintForText.classList.add("hint-for-text-show-blue");
  }
});

textFeedback.addEventListener("blur", function(event) {
  event.preventDefault();
  if (textFeedback.value) {
    hintForText.classList.add("hint-for-text-show-grey");
    textFeedback.classList.add("text-active");
  } else {
    textFeedback.setAttribute("placeholder", "Напишите что-нибудь...?");
    hintForText.classList.remove("hint-for-text-show-blue");
    textFeedback.classList.remove("text-active");
  }
});


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
