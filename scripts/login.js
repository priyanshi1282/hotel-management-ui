let password = document.getElementById('password');
const passwordError = document.getElementById('password-error');

password.addEventListener('input', () => {
    console.log(password.value, "xxxxx  ")
    validatePassword();
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

password.onblur = function () {
    if (!password.value)
        passwordError.style.display = "none";
}

function validateLogin() {
    const username = document.getElementById('username').value;
    const passwordVal = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === 'user123' && passwordVal === 'pass123') {
       
        window.location.href = 'homePage.html';
        return false; 
    } else {
        errorMessage.innerText = 'Invalid username or password';
        return false;
    }
}