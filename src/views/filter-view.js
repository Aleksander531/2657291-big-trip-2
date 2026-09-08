import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

function createTemplate(filters) {
  return `
    <form
      class="trip-filters"
      action="#"
      method="get"
    >
      ${filters.map((filter) => `
        <div class="trip-filters__filter">
          <input
            id="filter-${filter.type}"
            class="trip-filters__filter-input  visually-hidden"
            type="radio"
            name="trip-filter"
            value="${filter.type}"
            ${filter.isChecked ? 'checked' : ''}
            ${filter.isDisabled ? 'disabled' : ''}
          >

          <label
            class="trip-filters__filter-label"
            for="filter-${filter.type}"
          >
            ${filter.type}
          </label>
        </div>
      `).join('')}
    </form>
  `;
}

export default class FilterView extends AbstractStatefulView {
  #onFilterChange = null;

  constructor({
    filters,
    onFilterChange,
  }) {
    super();

    this._state = {
      filters,
    };

    this.#onFilterChange = onFilterChange;

    this._restoreHandlers();
  }

  get template() {
    return createTemplate(
      this._state.filters
    );
  }

  _restoreHandlers() {
    this.element.addEventListener(
      'change',
      this.#filterChangeHandler
    );
  }

  #filterChangeHandler = (evt) => {
    if (!evt.target.matches(
      '.trip-filters__filter-input'
    )) {
      return;
    }

    this.#onFilterChange(
      evt.target.value
    );
  };
}
