import React from 'react';
import { Route, IndexRoute } from 'react-router';
import index from './js/components/Landing/index';
import About from './js/components/Landing/About'
import Blog from './js/components/Blog/Blog';
import Contact from './js/components/Landing/Contact'
import App from './App';
export default (
  <Route path="/"  component={App} >
      <IndexRoute component={index} />
      <Route path="/About" component={About} />
      <Route path="/Blog" component={Blog} />
      <Route path="/Contact" component={Contact} />
  </Route>
);