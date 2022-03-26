import LoginUI from '../views/LoginUI.js';

export default class {
  constructor() {
    document.title = 'Accueil';
  }

  setPasswordVisibility() {
    const closeEye = document.querySelector('i.form-password-logo-close');
    const openEye = document.querySelector('i.form-password-logo-open');
    const allEye = document.querySelectorAll('i.js-eye');
    const inputPassword = document.getElementById('pass');
    let counter = 0;
    allEye.forEach((element) => {
      element.addEventListener('click', () => {
        if (counter % 2 === 0) {
          inputPassword.setAttribute('type', 'text');
          closeEye.style.display = 'none';
          openEye.style.display = 'initial';
        } else {
          inputPassword.setAttribute('type', 'password');
          closeEye.style.display = 'initial';
          openEye.style.display = 'none';
        }
        counter++;
      });
    });
  }

  isUsername(inputUser) {
    if (inputUser === 'remy') return true;
    return false;
  }

  async getHTML() {
    const root = document.getElementById('root');
    root.innerHTML = LoginUI();
    this.setPasswordVisibility();
    const loginButton = document.querySelector('button.button-login');
    loginButton.addEventListener('click', () => {
      const inputUsername = document.getElementById('username').value;
      if (this.isUsername(inputUsername)) {
        window.location.href = window.location.origin + '/src/index.html#prime-calculator';
        // window.location.href = window.location.origin + '/Prime-app/dist/index.html#prime-calculator';
      }
    });
  }
}
