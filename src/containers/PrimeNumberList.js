import PrimeNumberListUI from '../views/PrimeNumberListUI.js';

export default class {

  constructor() {
    // const elementListened = document.getElementById('prime-up-to');
    // elementListened.addEventListener('keyup', e => {
    //     this.numberUpTo = e.target.value;
    //     this.displayPrimeNumberList();
    // });
    this.numberUpTo = 200;
    this.displayPrimeNumberList();
  }

  getPrimeNumberArray() {
    function isPrimeNumber(number) {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    }
    const primeNumberArray = [];
    for (let i = 2; i <= this.numberUpTo; i++) {
      if (isPrimeNumber(i)) primeNumberArray.push(i);
    }
    return primeNumberArray;
  }

  displayPrimeNumberList() {
    const view = PrimeNumberListUI(this.getPrimeNumberArray());
    document.querySelector('div.js-prime').innerHTML = view;
  }

}
