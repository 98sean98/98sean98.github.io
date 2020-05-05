import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { initialState, rootReducer } from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeWrapper from './ThemeWrapper';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState || initialState);

// Tell react-snap how to save Redux state
window.snapSaveState = () => ({
  __PRELOADED_STATE__: store.getState(),
});

const Index = () => (
  <Provider store={store}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </Provider>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<Index />, rootElement);
} else {
  render(<Index />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
