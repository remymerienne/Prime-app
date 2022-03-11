import loginUI from '../views/LoginUI';
import PrimeNumber from '../containers/PrimeNumber.js';
import PASSWORD from '../constants/password';


export default class {

  constructor() {
    const main = document.querySelector('main.js-main');
    main.innerHTML = loginUI();
    this.checkUserName();
  }

  checkUserName() {
    const inputUser = document.getElementById('mail');
    inputUser.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        if(e.target.value === PASSWORD){
          new PrimeNumber();
        }
      }
    });
  }

}
