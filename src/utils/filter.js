import { FilterType } from '../const.js';
import { getFilteredPoints } from './filter-points.js';

const getBool = (n) => !n;

export const getAvailableFilters = (points, currentFilter) => Object
  .values(FilterType).map((filter) => ({
    type: filter,
    isChecked: currentFilter === filter,
    isDisabled: getBool(getFilteredPoints[filter](points).length),
  }));

