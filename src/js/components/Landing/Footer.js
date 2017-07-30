import React, { Component } from 'react';
import ReactDipper from 'react-dipper';

class Footer extends React.Component {
  render() {
    return(
       <footer>
        <div className="container">
          <div className="row">
            <div className="col l6 m6 s12">
              <p className="float-left">Copyright (c) 2017 Olayemi Awofadeju</p><br />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;