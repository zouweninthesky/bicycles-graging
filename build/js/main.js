'use strict';
var nav = document.querySelector('.main-nav');
var toggle = document.querySelector('.main-nav__toggle');

var openMenu = function () {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  } else {
    nav.classList.add('main-nav--closed');
    document.body.style.overflow = null;
  }
};

var initialize = function () {
  if (nav) {
    nav.classList.remove('main-nav--no-js');
    nav.classList.add('main-nav--closed');
    if (toggle) {
      toggle.addEventListener('click', openMenu);
    }
  }
};

initialize();
