import Structure from '../containers/Structure';
import Login from '../containers/Login';
import PASSWORD from '../constants/password';
import PrimeNumber from '../containers/PrimeNumber';

new Structure();
new Login();

const inputUser = document.getElementById('mail');
inputUser.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (e.target.value === PASSWORD) {
      new PrimeNumber();
    }
  }
});
