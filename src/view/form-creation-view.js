import {createElement} from '../render.js';

function createNewFormTemplate() {
  return '????????????????????????????';
}

export default class formCreationView {
  getTemplate() {
    return createNewFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
