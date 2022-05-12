const toggleMenuButton = document.querySelectorAll('.toggle-mobile-menu');
const seeCloseProjectButton = document.querySelectorAll('.see-close-project');
const contactForm = document.getElementById('contact-form');
const formErrorDiv = document.getElementById('error-div');
const email = document.getElementById('input-email');

const toggleDisplay = (section) => {
  section.classList.toggle('display-none');
};

function togglePopUp() {
  let div = document.querySelector('#mobile-popup');
  if (window.innerWidth >= 768) {
    div = document.querySelector('#desktop-pop-up');
  }
  toggleDisplay(div);
}

function toggleMobileMenuView() {
  const section = document.querySelector('#mobile-menu');
  toggleDisplay(section);
}

toggleMenuButton.forEach((item) => {
  item.addEventListener('click', toggleMobileMenuView);
});

seeCloseProjectButton.forEach((item) => {
  item.addEventListener('click', togglePopUp);
});

// Form validation

const validationWithMessage = () => {
  const errorP = document.getElementById('error-message');
  if (email.value === email.value.toLowerCase()) {
    formErrorDiv.style.width = '0px';
    formErrorDiv.style.visibility = 'hidden';
    return false;
  }
  formErrorDiv.style.visibility = 'visible';
  formErrorDiv.style.width = '301.865px';
  errorP.textContent = `Email Has to be in lower case, You passed: ${email.value}`;
  return true;
};

contactForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const error = validationWithMessage();
  if (!error) {
    formErrorDiv.style.visibility = 'hidden';
    contactForm.submit();
  }
});
