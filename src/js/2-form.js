const formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const objLocalStorage = JSON.parse(localStorage.getItem(localStorageKey)) ?? '';

if (objLocalStorage.email || objLocalStorage.message) {
  form.elements.email.value = objLocalStorage.email ?? '';
  form.elements.message.value = objLocalStorage.message ?? '';

  formData.email = objLocalStorage.email ?? '';
  formData.message = objLocalStorage.message ?? '';
}

form.addEventListener('input', saveToLocalStorage);

function saveToLocalStorage(event) {
  event.preventDefault();

  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', () => {
  event.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  formData.email = email;
  formData.message = message;

  localStorage.removeItem(localStorageKey);

  form.reset();
});
