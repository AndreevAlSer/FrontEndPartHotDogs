import 'font-awesome/css/font-awesome.min.css'

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'

import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const app = (
  // теперь реакт компоненты будут знать про редакс
  <Provider store={store}>
    <App></App>
  </Provider>
)

render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
