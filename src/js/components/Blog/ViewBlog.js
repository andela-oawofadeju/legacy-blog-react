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
      <div className="blog-check">
      <div className="bg-check">
      <section>
        <p className="blog-intro bold-span text-center"><strong>Welcome to my Blog</strong></p>
      </section>
      </div>
      </div>
      </article>
    );
  }
}
export default CreateBlog;