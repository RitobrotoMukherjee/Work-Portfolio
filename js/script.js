const toggleMenuButton = document.querySelectorAll('.toggle-mobile-menu');
const seeCloseProjectButton = document.querySelectorAll('.see-close-project');
const contactForm = document.getElementById('contact-form');
const formErrorDiv = document.getElementById('error-div');

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
  let message = '';
  const email = contactForm.elements.email.value;
  const styles = getComputedStyle(formErrorDiv);
  const errorP = document.getElementById('error-message');
  formErrorDiv.style.width = '0px';
  formErrorDiv.style.visibility = 'hidden';
  if (styles.visibility === 'hidden' && email !== email.toLowerCase()) {
    formErrorDiv.style.visibility = 'visible';
    formErrorDiv.style.width = '301.865px';
    message = `Email Has to be in lower case, You passed: ${email}`;
  }

  errorP.textContent = message;
  return message;
};

contactForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const error = validationWithMessage();
  if (!error) {
    formErrorDiv.style.visibility = 'hidden';
    contactForm.submit();
  }
});
