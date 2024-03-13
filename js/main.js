/* EVENTS */

/* Check email */
const btnGetStarted = document.getElementById("get-start-btn");
const inputEmail = document.getElementById("email-input");
const errorText = document.getElementById("form-error-msg");

const errorIconHtml = '<i class="fa-regular fa-circle-xmark"></i> ';

btnGetStarted.addEventListener('click', e => {
    e.preventDefault();
    
    const userEmail = inputEmail.value;
    if(userEmail.trim() == '') {
        inputEmail.classList.add('is-invalid');
        errorText.innerHTML = `${errorIconHtml} Email is required`;

        return;
    }

    if(!isValidEmail(userEmail)) {
        inputEmail.classList.add('is-invalid');
    } else {
        alert("valid email")
    }

});

const isValidEmail = email => {
    const hasAddressSign = email.indexOf('@') != -1;
    const hasDot = email.indexOf('.') != -1;

    return hasDot == true && hasAddressSign == true;
}