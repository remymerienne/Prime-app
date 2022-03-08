import {primeNumberBlockUI, primeNumberListUI} from '../views/PrimeNumberUI.js';

export default class {

  constructor() {
    const main = document.querySelector('main.js-main');
    main.innerHTML = primeNumberBlockUI();
    const elementListened = document.getElementById('prime-up-to');
    elementListened.addEventListener('keyup', e => {
        this.numberUpTo = e.target.value;
        this.displayPrimeNumberList();
    });
    // this.numberUpTo = 2000;
    // this.displayPrimeNumberList();
  }

  getPrimeNumberArray() {
    const isPrimeNumber = (number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    };
    const primeNumberArray = [];
    for (let i = 2; i <= this.numberUpTo; i++) {
      if (isPrimeNumber(i)) primeNumberArray.push(i);
    }
    return primeNumberArray;
  }

  displayPrimeNumberList() {
    const view = primeNumberListUI(this.getPrimeNumberArray());
    document.querySelector('div.js-prime').innerHTML = view;
  }

}
