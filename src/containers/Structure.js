import structureUI from '../views/StructureUI';

export default class {

  constructor() {
    this.displayDom();
  }

  displayDom() {
    document.body.innerHTML = structureUI();
  }

}
