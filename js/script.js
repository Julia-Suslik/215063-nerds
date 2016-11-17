//Обратная связь
var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".feedback");
var form = document.querySelector(".feedback-form");
var close = popup.querySelector(".close");
var cancel = popup.querySelector(".feedback-cancel");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("feedback-show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback-show");
    popup.classList.remove("feedback-error");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
            popup.classList.remove("feedback-error");
        }
    }
});

form.addEventListener("submit", function(event) {
    if (!login.value || !email.value || !text.value) {
        event.preventDefault();
        if (!login.value) {
            event.preventDefault();
            login.classList.add("input-error");
            if (login.addEventListener("focus", function(event) {
                event.preventDefault();
                login.classList.remove("input-error");
            })) {
            }
        } if (!email.value) {
            event.preventDefault();
            email.classList.add("input-error");
            if (email.addEventListener("focus", function(event) {
                event.preventDefault();
                email.classList.remove("input-error");
            })) {
            }
        } if (!text.value) {
            event.preventDefault();
            text.classList.add("input-error");
            if (text.addEventListener("focus", function(event) {
                event.preventDefault();
                text.classList.remove("input-error");
            })) {
            }
        }   
    }
})

//Онлайн-Карта Google
function initialize() {
    var x = 59.939095;
    var y = 30.322954;
    var mapOptions = {
        zoom: 18,
        center: new google.maps.LatLng(x, y),
        scrollwheel: false,
        disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector(".map"),
        mapOptions
    );
    var image = "img/map-marker.png";
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
google.maps.event.addDomListener(window, "load", initialize);