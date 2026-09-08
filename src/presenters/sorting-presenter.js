import { DEFAULT_SORTING, UpdateType } from "../const";
import { render } from "../framework/render";
import { getAvailableSorting } from "../utils/sorting";
import SortingView from "../views/sorting-view";

export default class SortingPresenter {
  #sortingModel;
  #filterModel;
  #sortingView;

  constructor({ sortingModel, filterModel }) {
    this.#sortingModel = sortingModel;
    this.#filterModel = filterModel;

    this.#sortingModel.addObserver(this.#handleModelEvent)
    this.#filterModel.addObserver(this.#handleResetSorting)
  }

  init(containerElement) {
    this.#sortingView = new SortingView({
      sorting: this.#getSorting(),
      onSortingChange: this.#handleSortingChange
    });

    render(this.#sortingView, containerElement);
  }

  #getSorting() {
    const currentSorting = this.#sortingModel.sortType;

    const result = getAvailableSorting(currentSorting);
    return result;
  }

  #handleModelEvent = () => {
    this.#sortingView.updateElement({
      sorting: this.#getSorting()
    })
  };

  #handleResetSorting = () => {
    this.#sortingModel.setSortType(UpdateType.MAJOR, DEFAULT_SORTING)
  };

  #handleSortingChange = (value) => {
    this.#sortingModel.setSortType(UpdateType.MAJOR, value)
  };
}

