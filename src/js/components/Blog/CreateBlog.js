import React, { Component } from 'react';
import {Row, Input, Icon} from 'react-materialize';
import TinyMCE from 'react-tinymce';

class CreateBlog extends Component {
  constructor() {
    super();
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }
  handleEditorChange(e) {
    console.log('CONTENT', e.target.getContent())
  }
  render() {
    return(
      <article>
      <div>
      <Row>
        <h3>Articles</h3>
        <form className="col m8">
          <div className="input-field col s12">
            <input placeholder="Blog Title" type="text" />
          </div>
          <div className="input-field col s12">
            <textarea placeholder="Blog Description" type="text" rows={10} cols="40">
            </textarea>
          </div>
          <div className="input-field col s12">
            <TinyMCE
              content=""
              config={{
                plugins: 'autolink link image lists print preview',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
              }}
              onChange={this.handleEditorChange}
            />
          </div>
          <div className="col m12 l12 s12 ">
            <button className="btn btn-large waves-effect waves-light">Save</button>
          </div>
        </form>
      </Row>
      </div>
      </article>
    );
  }
}
export default CreateBlog;