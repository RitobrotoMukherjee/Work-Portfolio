const inputFields = document.querySelectorAll('.input-fields');

const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputMessage = document.getElementById('input-message');

const formDataObj = {
  name: '',
  email: '',
  message: '',
};

const dataStoreLocal = (ev) => {
  console.log(ev);
};

inputFields.forEach((item) => item.addEventListener('input', dataStoreLocal));