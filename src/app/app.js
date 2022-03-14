import Calculate from '../pages/Calculate.js';
import Home from '../pages/Home.js';

const calculateUrl = '/src/index.html#calculate';

// Retour à l'url d'origine si rafraichissement
let pathname = window.location.pathname;
window.history.pushState({},
  pathname,
  window.location.origin + pathname
);

Home();

// Ecoute du clic et récupération de l'input
const inputUser = document.getElementById('username');
const button = document.querySelector('button.button-login');
button.addEventListener('click', () => {
  if (inputUser.value === 'remy') {

    window.history.pushState({},
      calculateUrl,
      window.location.origin + calculateUrl
    );

    const nowUrl = '/src/' + window.location.href.split('/').pop();
    if (nowUrl === calculateUrl) Calculate();

    console.log(nowUrl);
    console.log(calculateUrl);
  }
  
});
