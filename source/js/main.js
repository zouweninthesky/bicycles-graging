'use strict';
var nav = document.querySelector('.main-nav');
var toggle = document.querySelector('.main-nav__toggle');

var openMenu = function () {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    window.scrollTo(0, 0);
    document.body.classList.add('hidden');
  } else {
    nav.classList.add('main-nav--closed');
    document.body.classList.remove('hidden');
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
