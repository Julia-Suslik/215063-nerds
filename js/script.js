var open = document.querySelector(".btn-write-us");
var show = document.querySelector(".write-us");
var cancel = show.querySelector(".cancel-btn");
var login = show.querySelector("[name=login]");
var form = show.querySelector("form");
var storage = localStorage.getItem("login");

open.addEventListener("click", function (event) {
    event.preventDefault(event);
    show.classList.add("write-us-show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    show.classList.remove("write-us-show");
});

form.addEventListener("submit", function (event) {
    localStorage.setItem("login", login.value);
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (show.classList.contains("write-us-show")) {
            show.classList.remove("write-us-show");
        }
    }
});