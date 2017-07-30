import React, { Component } from 'react';
import {Row, Input, Icon} from 'react-materialize';

class Blog extends React.Component {

render() {
  return(
    <div>
    <h3>Articles</h3>
    <Row>
          <div className="form-group">
            <label htmlFor="name">Title*</label>
            <input className="form-control" name="name" ref="name" required type="text" />
          </div>
         <div className="form-group">
            <label htmlFor="project">Description *</label>
            <textarea className="form-control" name="project" ref="project" rows="4" />
          </div>
    </Row>
    </div>
    );
  }
}
export default Blog;