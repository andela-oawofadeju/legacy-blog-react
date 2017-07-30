import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Navbar, NavItem, Icon} from 'react-materialize';

class Header extends Component {
  render() {
    return (
      <Navbar className="lighten-1 header-nav custom-navbar" role="navigation" right>
          <NavItem href="/">Home</NavItem>
          <NavItem href="About">About</NavItem>
          <NavItem href="Blog">Blog</NavItem>
          <NavItem href="Contact">Contact</NavItem>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
      </Navbar>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.authenticated
  }
}

export default Header;