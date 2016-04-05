import './main.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx';

import storage from './lib/storage';
import configureStore from './store/configureStore'

const APP_STORAGE = 'redux_kanban';

const store = configureStore(storage.get(APP_STORAGE) || {});

store.subscribe(() => {
  if(!storage.get('debug')) {
    storage.set(APP_STORAGE, store.getState());
  }
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)