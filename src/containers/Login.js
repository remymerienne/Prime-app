import loginUI from '../views/LoginUI';

export default class {

  constructor() {
   this.displayLoginForm();
  }

  displayLoginForm(){
    const main = document.querySelector('main.js-main');
    main.innerHTML = loginUI();
  }

}
