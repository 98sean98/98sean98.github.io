import { UPDATE_WINDOW_SIZE } from './index';

export const updateWindowSize = (width = 0, height = 0) => ({
  type: UPDATE_WINDOW_SIZE,
  windowSize: { width, height },
});
