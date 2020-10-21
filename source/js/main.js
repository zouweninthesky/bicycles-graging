'use strict';
(function () {
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
})();

(function () {
  var form = document.querySelector('.application__form');
  var phoneInput = document.querySelector('#phone-number');
  var phoneExpression = /\+7 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}/;
  var errorMessage = 'Неподходящий формат телефона!';

  var initPhoneMask = function () {
    if (phoneInput) {
      var cleave = new Cleave('#phone-number', {
        phone: true,
        phoneRegionCode: 'RU'
      });
    }
  };

  var checkPhone = function () {
    if (phoneExpression.test(phoneInput.value)) {
      phoneInput.setCustomValidity('');
    } else {
      phoneInput.setCustomValidity(errorMessage);
    }
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (phoneExpression.test(phoneInput.value)) {
      form.submit();
    } else {
      phoneInput.addEventListener('change', checkPhone);
    }
  });

  initPhoneMask();
})();
