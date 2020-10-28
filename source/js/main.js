'use strict';
(function () {
  var nav = document.querySelector('.main-nav');
  var toggle = nav.querySelector('button');

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
})();

(function () {
  var form = document.querySelector('.application__form');
  var phoneInput = document.querySelector('#phone-number');
  var errorMessage = 'Введите номер полностью!';
  var requiredLength = 18;

  var initPhoneMask = function () {
    if (phoneInput) {
      $('#phone-number').mask('+7 (000) 000-00-00');
    }
  };

  var checkPhone = function () {
    phoneInput.setCustomValidity(errorMessage);
    if (phoneInput.value.length === requiredLength) {
      phoneInput.setCustomValidity('');
    } else {
      phoneInput.setCustomValidity(errorMessage);
    }
  };

  var onFormSubmit = function () {
    if (form) {
      if (phoneInput) {
        form.addEventListener('submit', function (evt) {
          evt.preventDefault();
          if (phoneInput.value.length === requiredLength) {
            form.submit();
          } else {
            phoneInput.addEventListener('change', checkPhone);
          }
        });
      }
    }
  };

  onFormSubmit();

  initPhoneMask();
})();
