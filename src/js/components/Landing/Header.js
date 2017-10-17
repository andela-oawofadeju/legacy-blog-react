import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Navbar, NavItem, Icon, Dropdown, Button, Col } from 'react-materialize';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="">
          <Col s={1} className='grid-example'></Col>
            <Navbar brand='I-Diva'  className="lighten-1 header-nav custom-navbar" role="navigation" right>
                <NavItem href="/">Home</NavItem>
                  <Dropdown className="modify-nav" trigger={
                    <NavItem>About Me</NavItem>
                  }>
                    <NavItem href="About">My Profile</NavItem>
                  </Dropdown>
                  <Dropdown className="modify-nav" trigger={
                    <NavItem>Blog</NavItem>
                  }>
                    <NavItem href="Blog">Blog</NavItem>
                    <NavItem divider />
                    <NavItem>Lifestyle</NavItem>
                    <NavItem divider />
                    <NavItem>Technology</NavItem>
                  </Dropdown>
                <NavItem href="Contact">Contact</NavItem>
                <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                <NavItem href="Blog/CreateBlog">Admin</NavItem>
            </Navbar>
        </div>
      </header>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.authenticated
  }
}

export default Header;