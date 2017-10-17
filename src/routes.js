import React from 'react';
import { Route, IndexRoute } from 'react-router';
import index from './js/components/Landing/index';
import About from './js/components/Landing/About'
import ViewBlog from './js/components/Blog/ViewBlog';
import CreateBlog from './js/components/Blog/CreateBlog';
import Contact from './js/components/Landing/Contact'
import App from './App';
export default (
  <Route path="/"  component={App} >
      <IndexRoute component={index} />
      <Route path="/About" component={About} />
      <Route path="/Blog" component={ViewBlog} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Blog/CreateBlog" component={CreateBlog} />
  </Route>
);