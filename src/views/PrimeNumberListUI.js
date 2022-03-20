export default (primeNumberArray) => {

  const getPrimeNumberRow = () => primeNumberArray.map(e => e).join(' - ');
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

};
