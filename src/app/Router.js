import Calculate from '../pages/Calculate.js';
import Home from '../pages/Home.js';
import ROUTES_PATH from '../constants/routes.js';

// Retour à l'url d'origine si rafraichissement
let pathname = window.location.pathname;
window.history.pushState({},
  pathname,
  window.location.origin + pathname
);

let CurrentPath = '/Prime-app/dist/' + window.location.href.split('/').pop();
// let CurrentPath = '/src/' + window.location.href.split('/').pop();
if (CurrentPath === ROUTES_PATH.Home) Home();

// Soumission du password
const inputUser = document.getElementById('username');
const button = document.querySelector('button.button-login');
button.addEventListener('click', () => {
  if (inputUser.value === 'remy') {
    window.history.pushState({},
      ROUTES_PATH.Calculate,
      window.location.origin + ROUTES_PATH.Calculate
    );
    CurrentPath = '/Prime-app/dist/' + window.location.href.split('/').pop();
    // CurrentPath = '/src/' + window.location.href.split('/').pop();
    if (CurrentPath === ROUTES_PATH.Calculate) Calculate();
  }
});
