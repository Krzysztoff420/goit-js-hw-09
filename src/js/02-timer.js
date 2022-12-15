import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const remainingDays = document.querySelector('span[data-days]');
const remainingHours = document.querySelector('span[data-hours]');
const remainingMinutes = document.querySelector('span[data-minutes]');
const remainingSeconds = document.querySelector('span[data-seconds]');
let remainingTime = undefined;
let chosenTime = undefined;
let timerId = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date())
      Notiflix.Notify.failure('Please choose a date in the future', {
        position: 'left-top',
        timeout: 3000,
      }),
        (startBtn.disabled = true);
    else (chosenTime = selectedDates[0]), (startBtn.disabled = false);
  },
};

flatpickr(input, options);

const convertMs = ms => {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};
startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  timerId = setInterval(() => {
    remainingTime = chosenTime - new Date().getTime();
    const selectedTime = convertMs(remainingTime);
    remainingDays.innerHTML = addLeadingZero(selectedTime.days);
    remainingHours.innerHTML = addLeadingZero(selectedTime.hours);
    remainingMinutes.innerHTML = addLeadingZero(selectedTime.minutes);
    remainingSeconds.innerHTML = addLeadingZero(selectedTime.seconds);
    if (remainingTime <= 1000) {
      clearInterval(timerId);
    }
  }, 1000);
});
