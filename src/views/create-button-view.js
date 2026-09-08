import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

function createTemplate(isDisabled) {
  return (`
    <button
      class="trip-main__event-add-btn  btn  btn--big  btn--yellow"
      type="button"
      ${isDisabled && 'disabled'}
    >New event</button>
  `);
}

export default class CreateButtonView extends AbstractStatefulView {
  #onClick;
  constructor({ onClick, isDisabled }) {
    super();
    this.#onClick = onClick;
    this._setState({isDisabled});
    this._restoreHandlers();
  }

  get template() {
    return createTemplate(this._state.isDisabled);
  }

  _restoreHandlers() {
    this.element.addEventListener('click', this.#createHandler);
  }

  #createHandler = () => {
    this.#onClick();
  };
}
