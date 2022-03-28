import { ROUTES_PATH } from '../constants/routes.js';

export default class {
  constructor() {
    const loginButton = document.querySelector('button.button-login');
    loginButton.addEventListener('click', () => {
      const username = document.getElementById('username').value;
      if (this.isUsername(username)) this.handleCLickPrimeNumber();
    });
    const allEye = document.querySelectorAll('i.js-eye');
    allEye.forEach((element) => {
      element.addEventListener('click', () => {
        this.setPasswordVisibility();
      });
    });
  }

  isUsername(inputUser) {
    if (inputUser === 'remy') return true;
    return false;
  }

  handleCLickPrimeNumber() {
    window.location.href = window.location.origin + ROUTES_PATH.Prime;
  }

  setPasswordVisibility() {
    if (this.counter === undefined) this.counter = 0;
    const closeEye = document.querySelector('i.form-password-logo-close');
    const openEye = document.querySelector('i.form-password-logo-open');
    const inputPassword = document.getElementById('pass');
    if (this.counter % 2 === 0) {
      inputPassword.setAttribute('type', 'text');
      closeEye.style.display = 'none';
      openEye.style.display = 'initial';
    } else {
      inputPassword.setAttribute('type', 'password');
      closeEye.style.display = 'initial';
      openEye.style.display = 'none';
    }
    this.counter++;
  }
}
