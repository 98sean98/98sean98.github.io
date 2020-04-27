import { UPDATE_WINDOW_SIZE } from '../actions';

export const windowSize = (state = { width: 0, height: 0 }, action) =>
  action.type === UPDATE_WINDOW_SIZE ? action.windowSize : state;
