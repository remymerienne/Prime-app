export default class {
  constructor() {
    const elementListened = document.getElementById('prime-up-to');
    elementListened.addEventListener('keyup', (e) => {
      this.getHtml(e);
    });

    elementListened.addEventListener('keydown', (e) => {
      this.preventEnterKeyPress(e);
    });
  }

  isTreatable(number) {
    if (number < 2 || isNaN(number)) return false;
    return true;
  }

  isPrimeNumber(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0 || this.isTreatable(number) === false) return false;
    }
    return true;
  }

  getPrimeNumberArray(numberUpTo) {
    const primeNumberArray = [];
    for (let i = 2; i <= numberUpTo; i++) {
      if (this.isPrimeNumber(i)) primeNumberArray.push(i);
    }
    return primeNumberArray;
  }

  getPrimeNumberList(primeNumberArray) {
    const getPrimeNumberRow = () => primeNumberArray.map((e) => e).join(' - ');
    const getHowMany = () => primeNumberArray.length.toLocaleString();
    if (primeNumberArray.length >= 1) {
      return `
      <div class="prime-info">
        <p>${getHowMany()} nombres trouvées</p>
        <a href="../coverage/lcov-report/index.html" target="_blank">Test coverage</a>
      </div>
      <p class="prime-list" data-testid="input-valid">${getPrimeNumberRow()}</p>
    `;
    } else {
      return `
      <div data-testid="input-null"></div>
    `;
    }
  }

  preventEnterKeyPress(e) {
    if (e.key === 'Enter') e.preventDefault();
  }

  getHtml(e) {
    const array = this.getPrimeNumberArray(e.target.value);
    const viewList = this.getPrimeNumberList(array);
    const target = document.getElementById('js-prime');
    target.innerHTML = viewList;
  }
}
