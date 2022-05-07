const openLogin = document.querySelector(".contacts-button");
const modalLogin = document.querySelector(".modal-email");
const closeLogin = modalLogin.querySelector(".modal-close");
const loginName = modalLogin.querySelector(".login-name");
const loginEmail = modalLogin.querySelector(".login-email");
const textField = modalLogin.querySelector(".login-text-field");
const loginForm = modalLogin.querySelector(".login-form");

let checkStorage = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    checkStorage = false;
}


openLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLogin.classList.add("modal-active");
    loginName.focus();

    if (storage) {
        loginName.value = storage;
        loginEmail.focus();
    } else {
        loginName.focus();
    }
});

closeLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLogin.classList.remove("modal-active");
    modalLogin.classList.remove("modal-mistake");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalLogin.classList.contains("modal-active")) {
            evt.preventDefault()
            modalLogin.classList.remove("modal-active");
            modalLogin.classList.remove("modal-mistake");
        }
    }
})

loginForm.addEventListener("submit", function (evt) {
    if (!loginName.value || !loginEmail.value || !textField.value) {
        evt.preventDefault();
        modalLogin.classList.remove("modal-mistake");
        modalLogin.offsetWidth = modalLogin.offsetWidth;
        modalLogin.classList.add("modal-mistake");
    } else {
        if (checkStorage) {
            localStorage.setItem("name", loginName.value);
        }
    }
});
