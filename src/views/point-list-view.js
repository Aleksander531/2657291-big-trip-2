import AbstractView from '../framework/view/abstract-view.js';

function createTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class PointListView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createTemplate();
  }
}
