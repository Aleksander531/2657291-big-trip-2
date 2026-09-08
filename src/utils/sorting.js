import { SortTypeDescriptions } from '../const';

export const getAvailableSorting = (currentSorting) => Object
  .keys(SortTypeDescriptions)
  .map((item) => ({
    id: item,
    name: SortTypeDescriptions[item].name,
    isDisabled: SortTypeDescriptions[item].isDisabled,
    isChecked: currentSorting === item
  }));
