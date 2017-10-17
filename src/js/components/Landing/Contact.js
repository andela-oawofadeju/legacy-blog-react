import React, { Component } from 'react';
import ReactDipper from 'react-dipper';
import {Row, Input, Icon} from 'react-materialize';

class Contact extends React.Component {
  render() {
    return(
       <div>
       <h3><strong>Contact</strong>Me</h3>
        <Row>
          <Input className="contact-input" s={6} label="Name" validate><Icon>account_circle</Icon></Input>
          <Input className="contact-input" s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
          <Input className="contact-input" s={6} label="Email" validate type='tel'><Icon>phone</Icon></Input>
          <Input className="contact-input" s={6} label="Message" validate type='tel' rows={10} cols="40"><Icon>phone</Icon></Input>
          <div className="col m12 l12 s12 ">
            <button className="btn btn-large waves-effect waves-light">Save</button>
          </div>
        </Row>
      </div>
    );
  }
}

export default Contact;