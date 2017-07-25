import React, { Component } from 'react';
import ReactDipper from 'react-dipper';
import {Navbar, NavItem, Icon} from 'react-materialize';


class App extends Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

export default App;
