import LoginUI from '../views/LoginUI.js';
import PrimeNumberUI from '../views/PrimeNumberUI.js';
import PrimeNumber from '../containers/PrimeNumber.js';

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = LoginUI();

const inputUser = document.getElementById('username');
inputUser.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (e.target.value === 'remy') {
      rootDiv.innerHTML = PrimeNumberUI();
      new PrimeNumber();
    }
  }
});
