import Observable from '../framework/observable';
import { DEFAULT_SORTING } from '../const';

export default class SortingModel extends Observable {
  #currentSorting = DEFAULT_SORTING;

  get sortType() {
    return this.#currentSorting;
  }

  setSortType(updateType, sortType) {
    this.#currentSorting = sortType;

    this._notify(updateType, sortType);
  }
}
