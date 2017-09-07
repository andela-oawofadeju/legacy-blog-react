import React, { Component } from 'react';
import {Row, Input, Icon} from 'react-materialize';

class CreateBlog extends React.Component {

render() {
  return(
    <div>
    <h3>Articles</h3>
    <Row>
          <div className="form-group">
            <label htmlFor="input_text" className="form-text"><strong>Title</strong></label>
            <input className="input-field col s6" id="input_text" data-length="10" type="text" />
          </div>
         <div className="form-group">
            <label htmlFor="textarea1" className="form-text materialize-textarea"><strong>Description</strong></label>
            <textarea className="input-field col s12" name="project" ref="project" rows="4" />
          </div>
          <div className="row">
            <div className="col m12 l12 s12 ">
              <button className="btn btn-large waves-effect waves-light">Save</button>
            </div>
          </div>
    </Row>
    </div>
    );
  }
}
export default CreateBlog;