const submitBtn = document.querySelector('form .submit');
const formEl = document.querySelector('form');
const inputEls = formEl.querySelectorAll('.form-group input');
console.log(inputEls);

const submitHandler = (event) => {
    event.preventDefault();
    validateForm();
}

const clickHandler = (event) => {
    event.target.classList.remove('input-error');
}

const validateForm = () => {
    const firstName = formEl.querySelector('#first-name');
    const lastName = formEl.querySelector('#last-name');
    const email = formEl.querySelector('#email');
    const password = formEl.querySelector('#password');

    const texts = [firstName, lastName, password];

    for (const text of texts) {
        if(isEmpty(text.value)) {
            visualizeError(text);
        }
    }

    if(!isEmail(email.value)) {
        visualizeError(email);
        email.setAttribute('placeholder', 'email@example.com');
    }
}

const visualizeError = (element) => {
    element.classList.add('input-error');
    element.setAttribute('placeholder', '');
    element.nextElementSibling.classList.remove('hidden');
}

const isEmpty = (text) => {
    if (text.trim()) {
        return false;
    }
    return true;
}

const isEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

submitBtn.addEventListener('click', submitHandler);

for (const element of inputEls) {
    element.addEventListener('click', clickHandler);
}