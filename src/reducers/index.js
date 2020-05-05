import { combineReducers } from 'redux';
import { windowSize } from './windowSize';

export const rootReducer = combineReducers({ windowSize });

export const initialState = {
  windowSize: { width: 1000, height: 1000 },
};
