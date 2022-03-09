import structureUI from '../views/StructureUI.js';

export default class {

  constructor() {
    this.displayDom();
  }

  displayDom() {
    document.body.innerHTML = structureUI();
  }

}
