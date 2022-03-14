import Calculate from '../pages/Calculate.js';
import Home from '../pages/Home.js';

// Gestion de la page de login
Home();

// Ecoute du clic et récupération de l'input
const inputUser = document.getElementById('username');
const button = document.querySelector('button.button-login');
button.addEventListener('click', () => {
    if (inputUser.value === 'remy') {

      // Gestion des nombres premiers
      Calculate();

    }
});

