import AbstractStatefulView from '../../framework/view/abstract-stateful-view.js';

function createTemplate() {
  return ``;
}

export default class View extends AbstractStatefulView {

  constructor() {
    super();

    this._setState({});
  }

  get template() {
    return createTemplate();
  }

  _restoreHandlers() {}

}
