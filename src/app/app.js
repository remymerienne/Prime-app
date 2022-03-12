import Structure from '../containers/Structure';
import Login from '../containers/Login';
import PrimeNumber from '../containers/PrimeNumber';

new Structure();
new Login();

const inputUser = document.getElementById('username');
inputUser.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (e.target.value === 'remy') {
      new PrimeNumber();
    }
  }
});
