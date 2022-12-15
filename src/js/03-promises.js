import Notiflix from 'notiflix';

const form = document.querySelector('form');
const createBtn = document.querySelector('button[type = submit]');
createBtn.disabled = false;

form.addEventListener('submit', event => {
  event.preventDefault();
  createBtn.disabled = true;
  const { delay, step, amount } = form.elements;
  for (let i = 0; i < amount.value; i++) {
    createPromise(i + 1, Number(delay.value) + i * Number(step.value))
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  const totalDelay =
    Number(delay.value) + (Number(amount.value) - 1) * Number(step.value);
  setTimeout(() => (createBtn.disabled = false), totalDelay);
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
