import LoginUI from '../views/LoginUI.js';
import PrimeNumberUI from '../views/PrimeNumberUI.js';

export const ROUTES_PATH = {
  Hosting: '/src/',
  Home: '/src/index.html',
  Prime: '/src/index.html#prime-calculator',
};

export const RENDER = (pathname) => {
  switch (pathname) {
    case ROUTES_PATH['Home']:
      return LoginUI();
    case ROUTES_PATH['Prime']:
      return PrimeNumberUI();
  }
};

// Hosting: '/Prime-app/dist/',
// Home: '/Prime-app/dist/index.html',
// Prime: '/Prime-app/dist/index.html#prime-calculator'
