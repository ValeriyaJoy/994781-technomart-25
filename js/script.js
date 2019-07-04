var link = document.querySelector(".open-message");
var popup = document.querySelector(".write-us-items");
var close = popup.querySelector(".button-close");
var writeUsForm = popup.querySelector(".write-us-form");
var sanderName = popup.querySelector("[name=sender-name]");
var email = popup.querySelector("[name=email]");
var mailText = popup.querySelector("[name=mail-text]");
var isStorageSupport = true;
var storageSanderName = "";

try {
  storageSanderName = localStorage.getItem("sanderName");
} catch (err) {
  isStorageSupport = false;
}
var storageEmail = "";

try {
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}
var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".button-close");

link.addEventListener ("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
    if (storageSanderName) {
      sanderName.value = storageSanderName;
      email.focus();
    } else {
      sanderName.focus();
    }
    if (storageEmail) {
      email.value = storageEmail;
      mailText.focus();
    } else {
      email.value.focus();
    }

});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
})
mapLink.addEventListener ("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
})
writeUsForm.addEventListener("submit", function(evt) {
 if (!sanderName.value || !email.value || !mailText.value) {
   evt.preventDefault();
   popup.classList.remove("modal-error");
   popup.offsetWidth = popup.offsetWidth;
   popup.classList.add("modal-error");
 } else {
 if (isStorageSupport) {
   localStorage.setItem("sanderName", sanderName.value);
   localStorage.setItem("email", email.value);
   }
 }
})
window.addEventListener("keydown", function (evt) {
 if (evt.keyCode === 27) {
   evt.preventDefault();
   if (popup.classList.contains("modal-show")) {
       popup.classList.remove("modal-show");
       popup.classList.remove("modal-error");
   }
 }
});
