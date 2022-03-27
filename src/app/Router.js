import Login from '../containers/Login.js';
import PrimeNumber from '../containers/PrimeNumber.js';
import { ROUTES_PATH, RENDER } from '../constants/routes.js';

export const router = () => {
  const currentPath = ROUTES_PATH.Hosting + window.location.href.split('/').pop();
  const root = document.getElementById('root');
  root.innerHTML = RENDER(currentPath);
  if (currentPath === ROUTES_PATH.Home) new Login();
  if (currentPath === ROUTES_PATH.Prime) new PrimeNumber();
};

document.addEventListener('DOMContentLoaded', () => {
  router();
});

window.addEventListener('popstate', router);
