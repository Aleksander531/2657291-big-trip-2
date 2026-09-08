import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

function createTemplate(sorting) {
  return (`
    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sorting.map((item) => (`
        <div class="trip-sort__item  trip-sort__item--${item.id}">
          <input
            id="sort-${item.id}"
            data-sort="${item.id}"
            class="trip-sort__input  visually-hidden"
            type="radio"
            name="trip-sort"
            value="sort-${item.id}"
            ${item.isChecked && 'checked'}
            ${item.isDisabled && 'disabled'}>
          <label class="trip-sort__btn" for="sort-${item.id}">${item.name}</label>
        </div>
      `)).join('')}
     </form>
  `);
}

export default class SortingView extends AbstractStatefulView {
  #onSortingChange;

  constructor({ sorting, onSortingChange }) {
    super();
    this.#onSortingChange = onSortingChange;
    this._setState({ sorting });
    this._restoreHandlers();
  }

  get template() {
    return createTemplate(this._state.sorting);
  }

  _restoreHandlers() {
    this.element.addEventListener('change', this.#sortingChangeHandler);
  }

  #sortingChangeHandler = (evt) => {
    this.#onSortingChange(evt.target.dataset.sort);
  };
}
