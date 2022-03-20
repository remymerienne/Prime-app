import PrimeNumber from '../containers/PrimeNumber.js';
import Login from '../containers/Login.js';
import ROUTES_PATH from '../constants/routes.js';

const router = () => {

  // let currentPath = '/Prime-app/dist/' + window.location.href.split('/').pop();
  const currentPath = '/src/' + window.location.href.split('/').pop();

  if (currentPath === ROUTES_PATH.Home) {
    const myLogin = new Login();
    myLogin.getHTML();
  }

  if (currentPath === ROUTES_PATH.Prime) {
    const myList = new PrimeNumber();
    myList.getHTML();
  }

};

document.addEventListener('DOMContentLoaded', () => {
  
  router();
  
});

window.addEventListener('popstate', router);
