export const AUTHORIZATION = `Basic ${crypto.randomUUID()}`;
export const SERVER = 'https://22.objects.htmlacademy.pro/big-trip';

export const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export const EndPoints = {
  POINTS: 'points',
  OFFERS: 'offers',
  DESTINATIONS: 'destinations',
  POINT: 'points/:id'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

export const DEFAULT_FILTER = FilterType.EVERYTHING;

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};

export const SortTypeDescriptions = {
  [SortType.DAY]: {
    isDisabled: false,
    name: 'Day',
  },
  [SortType.EVENT]: {
    isDisabled: true,
    name: 'Event',
  },
  [SortType.TIME]: {
    isDisabled: false,
    name: 'Time',
  },
  [SortType.PRICE]: {
    isDisabled: false,
    name: 'Price',
  },
  [SortType.OFFERS]: {
    isDisabled: true,
    name: 'Offers',
  }
};

export const DEFAULT_SORTING = SortType.DAY;

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const FILTER_NAMES = {
  [FilterType.EVERYTHING]: 'Everything',
  [FilterType.FUTURE]: 'Future',
  [FilterType.PRESENT]: 'Present',
  [FilterType.PAST]: 'Past',
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const POINTS_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export { FilterType, SortType, UserAction, UpdateType, FILTER_NAMES, Mode, POINTS_TYPES, TimeLimit };
