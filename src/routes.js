import React from 'react';
import { Route, IndexRoute } from 'react-router';
import index from './js/components/Landing/index';
import App from './App';
export default (
  <Route path="/"  component={App} >
      <IndexRoute component={index} />
  </Route>
);