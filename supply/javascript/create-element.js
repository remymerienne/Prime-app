// - Exemple de création d'éléments
// - ==============================
const container = document.createElement('div');
const body = document.querySelector('body');

container.classList.add('container');
body.appendChild(container);

container.innerHTML = `
  <div class="page">
    <p>Hello world &nbsp; <span class="fas fa-seedling"></span></p>
  </div>
  `;

// - Générateur de Fibonacci sequence (method)
// - ================================
// getFibonacciSequenceArray() {
//   const fibonacciSequenceArray = [0, 1];
//   const getLastNumber = (tab) => tab[tab.length - 1] + tab[tab.length - 2];
//   for (let i = 3; i <= this.numberUpTo; i++) {
//     fibonacciSequenceArray.push(getLastNumber(fibonacciSequenceArray));
//   }
//   return fibonacciSequenceArray;
// }