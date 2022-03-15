import PrimeNumber from '../containers/PrimeNumber.js';
import Login from '../containers/Login.js';
import ROUTES_PATH from '../constants/routes.js';

// Retour à l'url d'origine si rafraichissement
let pathname = window.location.pathname;
window.history.pushState({},
  pathname,
  window.location.origin + pathname
);

// let CurrentPath = '/Prime-app/dist/' + window.location.href.split('/').pop();
let CurrentPath = '/src/' + window.location.href.split('/').pop();
if (CurrentPath === ROUTES_PATH.Home) new Login();

// Soumission du password
const inputUser = document.getElementById('username');
const button = document.querySelector('button.button-login');
button.addEventListener('click', () => {
  if (inputUser.value === 'remy') {
    window.history.pushState({},
      ROUTES_PATH.Prime,
      window.location.origin + ROUTES_PATH.Prime
    );
    // CurrentPath = '/Prime-app/dist/' + window.location.href.split('/').pop();
    CurrentPath = '/src/' + window.location.href.split('/').pop();
    if (CurrentPath === ROUTES_PATH.Prime) new PrimeNumber();
  }
});
