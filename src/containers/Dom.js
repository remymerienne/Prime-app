import DomUI from '../views/DomUI.js';

export default class {

  constructor() {
    this.displayDom();
  }

  displayDom() {
    document.body.innerHTML = DomUI();
  }

}
