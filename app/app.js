// /////////////VARIABLES///////////////////////

const hamburger = document.querySelector(".hamburger");
const logo = document.querySelector(".logo-box");
const header = document.querySelector(".header");
const nav = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".navigation__link");
const overlay = document.querySelector(".overlay");
const slides = document.querySelectorAll('#slide');
const heroContent = document.querySelectorAll('.hero__content-box');
const sBtnLeft = document.querySelector(".slider__btn-left");
const sBtnRight = document.querySelector(".slider__btn-right");
console.log(heroContent);

// /////////////HAMBURGER MENU//////////////////
hamburger.addEventListener('click', function (e) {
  const icon = e.target;
  if (!(icon.classList.contains('hamburger__icon'))) return;
  icon.classList.toggle('icon-cross');
  overlay.classList.add('display-block');
  overlay.classList.remove('overlay-show');
  header.classList.add('header-white');
  nav.classList.toggle('show-navigation');
  nav.classList.toggle('hidden');
  navLink.forEach(link => {
    link.classList.toggle('color-black');
  })
  if (header.classList.contains("header-white")) {
    nav.classList.remove('position-absolute');
  }
  logo.classList.add('logo-hide');
  setTimeout(function () {
    overlay.classList.add('overlay-show');
    if (!(icon.classList.contains('icon-cross'))) {
      overlay.classList.remove('display-block');
      header.classList.remove('header-white');
      nav.classList.add('position-absolute');
      logo.classList.remove('logo-hide');
    }
  }, 600);

});



// /////////////Slider//////////////////


// SLIDER FUNCTION
const gotoSlide = (slide) => {
  slides.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - slide)}%)`;
  })
}

// SHOW CONTENT FUNCTION
const showContent = (content) => {
  heroContent.forEach((item, i) => {
    if (content === i) {
      item.style.opacity = '1';
      item.style.visibility = 'visible';
    } else {
      item.style.opacity = '0';
      item.style.visibility = 'hidden';
    }
  })
}


let currSlide = 0;
const maxSlide = slides.length;

// PREIOUS SLIDE
const prevSlide = () => {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  gotoSlide(currSlide);
  showContent(currSlide);
}

// NEXT SLIDE
const nextSlide = () => {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  gotoSlide(currSlide);
  showContent(currSlide);
}


// SLIDER EVENTS
sBtnLeft.addEventListener('click', function () {
  prevSlide();
});

sBtnRight.addEventListener('click', function () {
  nextSlide();
});

// INITIAL STATE
gotoSlide(0);
showContent(0);




