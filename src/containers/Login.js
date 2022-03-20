import LoginUI from '../views/LoginUI.js';
import { setPasswordVisibility } from '../functions/login/SetPasswordVisibilityFX.js';
import { checkPassword } from '../functions/login/CheckPasswordFX.js';

export default class {

  constructor() {
    document.title = 'Accueil';
  }

  async getHTML() {

    // injection de la base html dans le 'body'
    const root = document.querySelector('body');
    root.innerHTML = LoginUI();

    // écoute si affichage du password
    setPasswordVisibility();

    // accès au site i password correct
    checkPassword();
    
  }

}
