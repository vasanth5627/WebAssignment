const firstNameInput = document.getElementById('firstNameInput');
const lastNameInput = document.getElementById('lastNameInput');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const telInput = document.getElementById('telInput');
const bioInput = document.getElementById('bioInput');
const submitBtn = document.getElementById('submitBtn');
const error = document.getElementsByClassName('error');


init();


function init() {
    firstNameInput.addEventListener('blur', validateFirstName);
    lastNameInput.addEventListener('blur', validateLastName);
    emailInput.addEventListener('blur', validateEmail);
    passInput.addEventListener('blur', validatePass);
    telInput.addEventListener('blur',validatePhoneNumber);
    bioInput.addEventListener('blur', validateBio);
}



function validateFirstName() {
    const re = /^[a-zA-Z]{3,16}$/;
    if(re.test(firstNameInput.value)){
        error[0].style.display = 'none';
        firstNameInput.style.borderColor = '#66d8a1'
    }
    else{
        error[0].style.display = 'block';
        firstNameInput.style.borderColor = 'black'
    }
}

function validateLastName() {
    const re = /^[a-zA-Z]{3,16}$/;
    if(re.test(lastNameInput.value)){
        error[1].style.display = 'none';
        lastNameInput.style.borderColor = '#66d8a1'
    }
    else{
        error[1].style.display = 'block';
        lastNameInput.style.borderColor = 'black'
    }
}

function validateEmail() {
    const re = /^([a-z0-9_\.\-]+)@([a-z0-9.\-\_]+)\.([a-z0-9]{2,5}$)/
    if(re.test(emailInput.value)){
        error[2].style.display = 'none';
        emailInput.style.borderColor = '#66d8a1'
    }
    else{
        error[2].style.display = 'block';
        emailInput.style.borderColor = 'black'
    }
}

function validatePass() {
    const re = /^[a-zA-z0-9@\_\-]{6,20}$/
    if(re.test(passInput.value)){
        error[3].style.display = 'none';
        passInput.style.borderColor = '#66d8a1'
    }
    else{
        error[3].style.display = 'block';
        passInput.style.borderColor = 'black'
    }
}

function validatePhoneNumber() {
    const re = /^[0-9]{10}$/;
    if(re.test(telInput.value)){
        error[4].style.display = 'none';
        telInput.style.borderColor = '#66d8a1'
    }
    else{
        error[4].style.display = 'block';
        telInput.style.borderColor = 'black'
    }
}

function validateBio() {
    const re = /^[a-z0-9_\-]{8,50}$/;
    if(re.test(bioInput.value)){
        error[5].style.display = 'none';
        bioInput.style.borderColor = '#66d8a1'
        changeBtn();
    }
    else{
        error[5].style.display = 'block';
        bioInput.style.borderColor = 'black'
    }
}

function changeBtn() {
    for(let i = 0; i < 6; i++) {
        console.log(error[i].style.display)
        if(error[i].style.display === 'none'){
            submitBtn.style.backgroundColor = '#66d8a1';
            submitBtn.style.border = 'none';
        }
    }
}