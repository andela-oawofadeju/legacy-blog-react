import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import './index.css';
import routes from './routes';
import App from './App';
import StoreConfig from './js/stores/StoreConfig';
import registerServiceWorker from './registerServiceWorker';

const store = StoreConfig();

ReactDOM.render(
  <App store={store} >
    <Router history={browserHistory} routes={routes} />
  </App>,
document.getElementById('root')
);
registerServiceWorker();
