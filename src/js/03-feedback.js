import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
form.addEventListener('input', throttle(inputHandler, 500));
form.addEventListener('submit', submitHandler);

function inputHandler() {
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
  //   console.log({ email: email.value, message: message.value });
}
const handledInput = JSON.parse(localStorage.getItem('feedback-form-state'));

restoreData();

function restoreData() {
  if (handledInput) {
    email.value = handledInput.email;
    message.value = handledInput.message;
  }
}

function submitHandler(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Fill in empty fields, please.');
  }
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
