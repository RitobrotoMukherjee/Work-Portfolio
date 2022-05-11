const toggleMenuButton = document.querySelectorAll('.toggle-mobile-menu');
const seeCloseProjectButton = document.querySelectorAll('.see-close-project');

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
