const toggleMenuButton = document.querySelectorAll('.toggle-mobile-menu');

function toggleMobileMenuView() {
  const section = document.querySelector('#mobile-menu');
  section.classList.toggle('display-none');
}

toggleMenuButton.forEach((item) => {
  item.addEventListener('click', toggleMobileMenuView);
});