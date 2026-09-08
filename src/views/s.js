import AbstractStatefulView from '../framework/view/abstract-stateful-view';

export default class S extends AbstractStatefulView {
  constructor() {
    super();

    this._state = {
      isRed: true,
    };

    this._restoreHandlers();
  }

  get template() {
    const color = this._state.isRed
      ? 'red'
      : 'green';

    return `
      <div
        style="
          width: 100px;
          height: 100px;
          background-color: ${color};
          cursor: pointer;
        "
      ></div>
    `;
  }

  _restoreHandlers() {
    this.element.addEventListener(
      'click',
      this.#handleClick
    );
  }

  #handleClick = () => {
    this.updateElement({
      isRed: !this._state.isRed,
    });
  };
}
