var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=your-name]");
var mail = popup.querySelector("[name=your-mail]");
var text = popup.querySelector("[name=text-leter]");

var input = popup.querySelectorAll("input");

var isStorageSupport = true;
var storageName = "";
var storageMail = "";

try {
  storageName = localStorage.getItem("name");
  storageMail = localStorage.getItem("mail");

} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    name.value = storageName;
  }
  if (storage) {
    mail.value = storageMail;
  }

});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});


form.addEventListener("submit", function (evt) {
  for (var i = 0; i < input.length; i++) {
    if (name.value==="" || mail.value === "") {
      evt.preventDefault();
      input[i].classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
        localStorage.setItem("mail", mail.value);
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
