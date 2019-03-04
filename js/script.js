
const loginButton = document.querySelector('.btn--login');

let labelName = document.querySelector('.label--name');
let inputName = document.querySelector('.input--name');
let labelPassword = document.querySelector('.label--password');
let inputPassword = document.querySelector('.input--password');
let loginSuccessful = null;


function validate(input, label, className1, className2) {
    if (!input.value) {
        input.classList.add(className1);
        label.classList.add(className2);
        return false;
    } else {
        input.classList.remove(className1);
        label.classList.remove(className2);
        return true;
    }
}

loginButton.addEventListener('click', function(e) {
    e.preventDefault();
    let name = validate(inputName, labelName, 'input--warn', 'label--warn');
    let password = validate(inputPassword, labelPassword, 'input--warn', 'label--warn');

    if (name && password) {
        inputName.value = "";
        inputPassword.value = "";
        loginSuccessful = true;
    }
});
