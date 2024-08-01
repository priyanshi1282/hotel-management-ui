let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpass');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirmpass-error');
let userId = document.getElementById('user-id');
const submitBtn = document.getElementById('submit-btn');

const randonNumber = Math.floor(100000 + Math.random() * 900000);
userId.innerHTML = randonNumber;


password.addEventListener('input', () => {
    validatePassword();
});

confirmPassword.addEventListener('input', () => {
    confirmPasswordFunc();
});

function validatePassword() {
    const passwordValue = password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([A-Za-z\d@$!%*?&]){1,30}$/;

    if (!regex.test(passwordValue)) {
        passwordError.style.display = "block";
    }
    else
        passwordError.style.display = "none";
}

function confirmPasswordFunc() {
    const passwordValue = password.value;
    const confirmpassValue = confirmPassword.value;

    if (passwordValue !== confirmpassValue)
        confirmPasswordError.style.display = "block";
    else
        confirmPasswordError.style.display = "none";

}

password.onblur = function () {
    if (!password.value)
        passwordError.style.display = "none";
}
confirmPassword.onblur = function () {
    if (!confirmPassword.value)
        confirmPasswordError.style.display = "none";
}