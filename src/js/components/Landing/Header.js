import React, { Component } from 'react';
import ReactDipper from 'react-dipper';
import {Navbar, NavItem, Icon} from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <Navbar className="light-blue lighten-1 header-nav" role="navigation" right>
          <NavItem href='#'>Home</NavItem>
          <NavItem href='#'>About</NavItem>
          <NavItem href='#'>Blog</NavItem>
          <NavItem href='#'>Contact</NavItem>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
      </Navbar>
    );
  }
}
export default Header