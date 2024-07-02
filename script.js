const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector("button");
let matchText = document.querySelector(".match-text")

submitButton.addEventListener("click", (event)=> {
    event.preventDefault();
    if (password.value !== confirmPassword.value) {
        matchText.textContent = "*Passwords do not match"
    }
    else {
        matchText.textContent = "";
        form.submit();
    }
})