import LoginUI from '../views/LoginUI.js';
import { setPasswordVisibility } from '../functions/login/passwordVisibilityFX.js';
import { isUsername } from '../functions/login/usernameFX.js';

export default class {

  constructor() {
    document.title = 'Accueil';
  }

  async getHTML() {

    // injection de la base html dans le 'body'
    const root = document.querySelector('body');
    root.innerHTML = LoginUI();

    // écoute si volonté d'affichage du password
    setPasswordVisibility();

    // au clic sur le bouton 'Login'
    const loginButton = document.querySelector('button.button-login');
    loginButton.addEventListener('click', () => {

      // si le nom d'utilisateur est correct...
      const inputUsername = document.getElementById('username').value;
      if (isUsername(inputUsername)) {

        // ...chargement de l'url
        window.location.href = window.location.origin + '/src/index.html#prime-calculator';
        // window.location.href = window.location.origin + '/Prime-app/dist/index.html#prime-calculator';
        
      }

    });

  }

}
