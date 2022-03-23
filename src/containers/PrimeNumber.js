import PrimeNumberUI from '../views/PrimeNumberUI.js';
import PrimeNumberListUI from '../views/PrimeNumberListUI.js';

export default class {
	constructor() {
		document.title = 'Nombres premiers';
	}

	// ! #1. Création de l'array de nombres premiers - Start -

	isTreatable(number) {
		if (number < 2 || isNaN(number)) return false;
		return true;
	}

	isPrimeNumber(number) {
		for (let i = 2; i <= Math.sqrt(number); i++) {
			if (number % i === 0 || this.isTreatable(number) === false) return false;
		}
		return true;
	}

	getPrimeNumberArray(numberUpTo) {
		const primeNumberArray = [];
		for (let i = 2; i <= numberUpTo; i++) {
			if (this.isPrimeNumber(i)) primeNumberArray.push(i);
		}
		return primeNumberArray;
	}

	// ! #1. Création de l'array de nombres premiers - End -

	getHTML() {
		// injection de la base HTML dans le 'body'
		const root = document.querySelector('body');
		root.innerHTML = PrimeNumberUI();

		// écoute de l'entrée utilisateur
		const elementListened = document.getElementById('prime-up-to');
		elementListened.addEventListener('keyup', (e) => {
			// création de la liste de nombres premiers
			const viewList = PrimeNumberListUI(this.getPrimeNumberArray(e.target.value));

			// injection de la liste générée dans la base HTML
			const target = document.getElementById('js-prime');
			target.innerHTML = viewList;
		});

		// empèche le rechargement de la page si press enter dans input
		elementListened.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') e.preventDefault();
		});
	}
}
