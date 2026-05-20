import sortingView from '../view/sorting-view.js';
import filterView from '../view/filters-view.js';
import formCreationView from '../view/form-creation-view.js';
import formEditingView from '../view/form-editing-view.js';
import routePointView from '../view/route-point-view.js';

export default class BordPresenter {
  sortComponent = new sortingView();
  editListComponent = new editList();

  constructor = ({ container }) {
    this.container = container;
  }

  init () {
    render (this.sortingView, this.container);
    render (this.editListComponent, this.container);
    render (new editListComponent, this.editListComponent.getElement());

    for (let i =0; i < 3; i++) {
      render (new PointerView(), this.editListComponent.getElement());
    }
  }
}
