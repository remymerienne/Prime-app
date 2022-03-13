import LoginUI from '../views/LoginUI.js';
import PrimeNumberUI from '../views/PrimeNumberUI.js';
import Login from '../containers/Login.js';
import PrimeNumber from '../containers/PrimeNumber.js';

const rootDiv = document.getElementById('root');

// Gestion de la page de login
rootDiv.innerHTML = LoginUI();
new Login();

// Ecoute du clic et récupération de l'input
const inputUser = document.getElementById('username');
const button = document.querySelector('button.button-login');
button.addEventListener('click', () => {
    if (inputUser.value === 'remy') {

      // Gestion des nombres premiers
      rootDiv.innerHTML = PrimeNumberUI();
      new PrimeNumber();

    }
});
