import { FilterType } from '../const.js';

export const getFilteredPoints = {
  [FilterType.EVERYTHING]: (points) =>
    points,

  [FilterType.FUTURE]: (points) =>
    points.filter((point) => new Date(point.dateFrom) > new Date()),

  [FilterType.PRESENT]: (points) =>
    points.filter((point) => {
      const now = new Date();

      return (
        new Date(point.dateFrom) <= now &&
        new Date(point.dateTo) >= now
      );
    }),

  [FilterType.PAST]: (points) =>
    points.filter((point) => new Date(point.dateTo) < new Date()),
};

