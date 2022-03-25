import PrimeNumberUI from '../views/PrimeNumberUI.js';
import PrimeNumberListUI from '../views/PrimeNumberListUI.js';

export default class {
	constructor() {
		document.title = 'Nombres premiers';
	}

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

	getHTML() {
		const root = document.getElementById('root');
		root.innerHTML = PrimeNumberUI();
		const elementListened = document.getElementById('prime-up-to');
		elementListened.addEventListener('keyup', (e) => {
			const viewList = PrimeNumberListUI(this.getPrimeNumberArray(e.target.value));
			const target = document.getElementById('js-prime');
			target.innerHTML = viewList;
		});
		elementListened.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') e.preventDefault();
		});
	}
}
