export const primeNumberBlockUI = () => {

  return (`
    <section>
      <header>
        <h2>Générateur de Nombres Premiers</h2>
      </header>
      <label for="prime-up-to">Calculer les nombres premiers jusqu'à </label>
      <input id="prime-up-to" data-testid="js-input" type="number">
      <div class="js-prime"></div>
    </section>
  `);

};

export const primeNumberListUI = (numberArray) => {

  const getPrimeNumberRow = () => numberArray.map(e => e).join(' - ');
  const getHowMany = () => numberArray.length.toLocaleString();

  if (numberArray.length >= 1) {
    return (`
      <p>${getHowMany()} nombres trouvées</p>
      <a href="coverage/lcov-report/index.html" target="_blank">Test coverage</a>
      <p class="prime-list" data-testid="prime-ok">${getPrimeNumberRow()}</p>
    `);
  } else {
    return (`
      <div data-testid="prime-null"></div>
    `);
  }

};
