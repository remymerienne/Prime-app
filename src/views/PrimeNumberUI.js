export const primeNumberBlockUI = () => {

  return (`
    <section class="prime-section">
      <header class="prime-header">
        <h2>Générateur de Nombres Premiers</h2>
      </header>
      <form class="prime-form" novalidate>
        <label for="prime-up-to">Calculer les nombres premiers jusqu'à </label>
        <input id="prime-up-to" data-testid="js-input" type="number">
      </form>
      <div class="js-prime"></div>
    </section>
  `);

};

export const primeNumberListUI = (numberArray) => {

  const getPrimeNumberRow = () => numberArray.map(e => e).join(' - ');
  const getHowMany = () => numberArray.length.toLocaleString();

  if (numberArray.length >= 1) {
    return (`
      <div class="prime-info">
        <p>${getHowMany()} nombres trouvées</p>
        <a href="coverage/lcov-report/index.html" target="_blank">Test coverage</a>
      </div>
      <p class="prime-list" data-testid="prime-ok">${getPrimeNumberRow()}</p>
    `);
  } else {
    return (`
      <div data-testid="prime-null"></div>
    `);
  }

};
