import React, { Component } from 'react';
import ReactDipper from 'react-dipper';
import {Navbar, NavItem, Icon} from 'react-materialize';
//import './App.css';

class Footer extends Component {
  render() {
    return (
       <div>
        <header className="w3-container w3-center w3-padding-48 w3-white">
          <h1 className="w3-xxxlarge"><b>JANE BLOGLIFE</b></h1>
          <h6>Welcome to the blog of <span class="w3-tag">Jane's world</span></h6>
        </header>
        <header className="w3-display-container w3-wide" id="home">
          <img className="w3-image" src="/w3images/jane.jpg" alt="Fashion Blog" width="1600" height="1060"></img>
          <div className="w3-display-left w3-padding-large">
            <h1 className="w3-text-white">Jane's</h1>
            <h1 className="w3-jumbo w3-text-white w3-hide-small"><b>FASHION BLOG</b></h1>
            <h6><button className="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off" onclick="document.getElementById('subscribe').style.display='block'">SUBSCRIBE</button></h6>
          </div>
        </header>
      </div>
      );
  }
}