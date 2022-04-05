// /////////////VARIABLES///////////////////////

const hamburger = document.querySelector(".hamburger");
const logo = document.querySelector(".logo-box");
const header = document.querySelector(".header");
const nav = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".navigation__link");

// /////////////HAMBURGER MENU//////////////////
hamburger.addEventListener('click', function (e) {
  const icon = e.target;
  if (!(icon.classList.contains('hamburger__icon'))) return;

  icon.classList.toggle('icon-cross');
  logo.classList.toggle('logo-hide');
  header.classList.toggle('header-white');
  nav.classList.toggle('show-navigation');
  navLink.forEach(link => {
    link.classList.toggle('color-black');
  })

});
