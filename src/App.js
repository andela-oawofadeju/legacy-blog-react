import React, { Component } from 'react';
import Header from './js/components/Landing/Header';
import Footer from './js/components/Landing/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
export default App;
