import PrimeNumberUI from '../views/PrimeNumberUI.js';
import PrimeNumberListUI from '../views/PrimeNumberListUI.js';
import { getPrimeNumberArray } from '../functions/PrimeNumberFx.js';

export default () => {

  const body = document.querySelector('body');
  body.innerHTML = PrimeNumberUI();

  const elementListened = document.getElementById('prime-up-to');
  elementListened.addEventListener('keyup', e => {

    let myList = PrimeNumberListUI(getPrimeNumberArray(e.target.value));

    const target = document.getElementById('js-prime');
    target.innerHTML = myList;

  });

  elementListened.addEventListener('keydown', e => {
    if (e.key === 'Enter') e.preventDefault();
  });

};
