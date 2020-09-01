import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reducer from './reducers';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

const initialState = {
  'tables': [
    {
      'id': 1,
      'name': 'today',
    },
    {
      'id': 2,
      'name': 'tomorrow',
    },
    {
      'id': 3,
      'name': 'next week',
    },
  ],
  'tasks': [
    {
      'id': 10,
      'priority': 'high',
      'description':
        'Work on company description. Add description for the menu',
      'tableId': 1,
    },
    {
      'id': 11,
      'priority': 'low',
      'description':
        'Work on company description. Add description for the menu',
      'tableId': 1,
    },
    {
      'id': 12,
      'priority': 'med',
      'description':
        'Work on company description. Add description for the menu',
      'tableId': 1,
    },
    {
      'id': 10,
      'priority': 'high',
      'description':
        'Work on company description. Add description for the menu',
      'tableId': 2,
    },
    {
      'id': 11,
      'priority': 'low',
      'description':
        'Work on company description. Add description for the menu',
      'tableId': 2,
    },
    {
      'id': 12,
      'priority': 'med',
      'description':
        'Work on company description. Add description for the menu',
      'tableId': 2,
    },
    {
      'id': 10,
      'priority': 'high',
      'description':
        'Work on company description. Add description for the menu',
      'tableId': 3,
    },
    {
      'id': 11,
      'priority': 'low',
      'description':
        'Work on company description. Add description for the menu',
      'tableId': 3,
    },
    {
      'id': 12,
      'priority': 'med',
      'description':
        'Work on company description. Add description for the menu',
      'tableId': 3,
    },
  ],
  'user': [],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
