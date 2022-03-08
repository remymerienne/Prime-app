export default (numberArray) => {

  const getPrimeNumberRow = () => numberArray.map(e => e).join(' - ');
  const getHowMany = () => numberArray.length.toLocaleString();

  if (numberArray.length >= 1) {
    return (`
      <div>
        <p>${getHowMany()} nombres trouvées</p>
        <a href="coverage/lcov-report/index.html" target="_blank">Test coverage</a>
      </div>
      <p class="prime-list" data-testid="prime-ok"> 
        ${getPrimeNumberRow()}
      </p>
    `);
  } else {
    return (`
      <div data-testid="prime-null"></div>
    `);
  }

};
