const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main');
const elementsArr = [header, footer, main];

function toggleMobileMenu() {
  const section = document.querySelector('#mobile-menu');
  section.classList.toggle('display-none');
}

function hideMobileMenu() {
  elementsArr.forEach((element) => {
    element.style.display = 'block';
  });
  toggleMobileMenu();
}

function showMobileMenu() {
  elementsArr.forEach((element) => {
    element.style.display = 'none';
  });
  toggleMobileMenu();
}
