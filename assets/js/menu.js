const menuIco = document.querySelector('.menu-ico');
const navMenu = document.querySelector('.main-menu');
const siteTitle = document.querySelector('.site-title');
const navBar = document.querySelector('.navbar');

menuIco.addEventListener('click', () => {
  siteTitle.classList.toggle('v-hidden');
  menuIco.classList.toggle('active');
  navMenu.classList.toggle('active');
  navBar.classList.toggle('bg-nav');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  menuIco.classList.remove('active');
  navMenu.classList.remove('active');
  navBar.classList.remove('bg-nav');
}));