export default class {

  constructor() {
    document.querySelector('body').innerHTML = this.getHtml();
    const elementListened = document.getElementById('prime-up-to');
    elementListened.addEventListener('keyup', e => {
      this.numberUpTo = e.target.value;
      document.querySelector('div.js-prime').innerHTML = this.getListHtml();
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

  getHtml() {
    return `
      <main class="main">
        <section class="prime">
          <header class="prime-header">
            <h1>Générateur de Nombres Premiers</h1>
          </header>
          <form class="prime-form" novalidate>
            <label for="prime-up-to">Calculer les nombres premiers jusqu'à </label>
            <input id="prime-up-to" class="prime-form-input" type="number" data-testid="js-input">
          </form>
          <div class="js-prime"></div>
        </section>
      </main>
    `;
  }

  getListHtml = () => {
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

}
