import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import "../src/css/style.css";
import routes from './routes';
import App from './App';
import StoreConfig from './js/stores/StoreConfig';
import registerServiceWorker from './registerServiceWorker';

const store = StoreConfig();

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
document.getElementById('root')
);
registerServiceWorker();
