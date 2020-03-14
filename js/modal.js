var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var yourName = popup.querySelector("[name=your-name]");
var yourEmail = popup.querySelector("[name=your-mail]");
var text = popup.querySelector("[name=text-leter]");

var input = popup.querySelectorAll("input");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("your-name");
  storageEmail = localStorage.getItem("your-mail");

} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  yourName.focus();
  if (storageName) {
    yourName.value = storageName;
    yourEmail.focus();
  }
  if (storageEmail) {
    yourEmail.value = storageEmail;
    text.focus();
  }

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < input.length; i++) {
    input[i].classList.remove("modal-error-input");
  }
  popup.classList.remove("modal-error");
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  popup.classList.remove("modal-error");
  for (var i = 0; i < input.length; i++) {
    if (input[i].value === "") {
      evt.preventDefault();
      input[i].classList.add("modal-error-input");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem(input[i].getAttribute("name"), input[i].value);
      }
    }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

var mapLink = document.querySelector(".contacts-map-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
