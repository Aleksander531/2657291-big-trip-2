import { render } from '../render.js';
import FormEditView from '../view/form-edit-view.js';
import SortView from '../view/sort-view.js';
import FilterView from '../view/filters-view.js';
import PointView from '../view/route-point-view.js';

export default class BoardPresenter {
  formEditView = new FormEditView();
  sortComponent = new SortView();
  filterComponent = new FilterView();

  constructor({ container }) {
    this.container = container;
  }

  init() {
    const filtersContainer = document.querySelector('.trip-controls__filters');
    const sortContainer = document.querySelector('.trip-events__trip-sort');
    const listContainer = document.querySelector('.trip-events__list');

    render(this.filterComponent, filtersContainer);
    render(this.sortComponent, sortContainer);
    render(this.formEditView, listContainer);

    for (let i = 0; i < 3; i++) {
      render(new PointView(), listContainer);
    }
  }
}
