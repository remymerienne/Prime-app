class PrimeNumber {

  constructor() {
    const elementListened = document.getElementById('prime-up-to');
    elementListened.addEventListener('keyup', e => {
      this.numberUpTo = e.target.value;
      this.displayPrimeNumberList();
    });
    elementListened.addEventListener('keydown', e => {
      if (e.key === 'Enter') e.preventDefault();
    });
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

  listUI = () => {
    const getPrimeNumberRow = () => this.getPrimeNumberArray().map(e => e).join(' - ');
    const getHowMany = () => this.getPrimeNumberArray().length.toLocaleString();
    if (this.getPrimeNumberArray().length >= 1) {
      return (`
      <div class="prime-info">
        <p>${getHowMany()} nombres trouvées</p>
        <a href="../coverage/lcov-report/index.html" target="_blank">Test coverage</a>
      </div>
      <p class="prime-list" data-testid="input-valid">${getPrimeNumberRow()}</p>
    `);
    } else {
      return (`
      <div data-testid="input-null"></div>
    `);
    }
  };

  displayPrimeNumberList() {
    document.querySelector('div.js-prime').innerHTML = this.listUI();
  }

}

export default PrimeNumber;
