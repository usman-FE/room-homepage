// /////////////VARIABLES///////////////////////

const hamburger = document.querySelector(".hamburger");
const logo = document.querySelector(".logo-box");
const header = document.querySelector(".header");
const nav = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".navigation__link");
const overlay = document.querySelector(".overlay");

// /////////////HAMBURGER MENU//////////////////
hamburger.addEventListener('click', function (e) {
  const icon = e.target;
  if (!(icon.classList.contains('hamburger__icon'))) return;

  icon.classList.toggle('icon-cross');
  header.classList.toggle('header-white');
  nav.classList.toggle('show-navigation');
  nav.classList.toggle('hidden');
  overlay.classList.toggle('overlay-show');
  navLink.forEach(link => {
    link.classList.toggle('color-black');
  })
  setTimeout(function () {
    logo.classList.toggle('logo-hide');
    nav.classList.toggle('position-absolute');
  }, 400);

});
