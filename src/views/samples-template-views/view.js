import AbstractView from '../framework/view/abstract-view.js';

function createTemplate() {
  return '';
}

export default class View extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createTemplate();
  }
}
