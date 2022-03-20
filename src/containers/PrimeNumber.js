import PrimeNumberUI from '../views/PrimeNumberUI.js';
import PrimeNumberListUI from '../views/PrimeNumberListUI.js';
import { getPrimeNumberArray } from '../functions/prime-number/primeNumberFX.js';

export default class {

  constructor() {
    document.title = 'Nombres premiers';
  }

  async getHTML() {

    // injection de la base html dans le 'body'
    const root = document.querySelector('body');
    root.innerHTML = PrimeNumberUI();

    // écoute de l'entrée utilisateur
    const elementListened = document.getElementById('prime-up-to');
    elementListened.addEventListener('keyup', e => {

      // création de la liste de nombre premier
      const myList = PrimeNumberListUI(getPrimeNumberArray(e.target.value));

      // injection de la liste générée dans la base html
      const target = document.getElementById('js-prime');
      target.innerHTML = myList;

    });

    // empèche le rechargement de la page si press enter dans input
    elementListened.addEventListener('keydown', e => {
      if (e.key === 'Enter') e.preventDefault();
    });

  }

}
