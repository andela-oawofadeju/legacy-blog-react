import React, { Component } from 'react';
import ReactDipper from 'react-dipper';
import {Row, Input, Icon} from 'react-materialize';

class Contact extends React.Component {
  render() {
    return(
       <div>
       <h3><strong>Contact</strong>Me</h3>
        <Row>
          <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
          <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
        </Row>
      </div>
    );
  }
}

export default Contact;