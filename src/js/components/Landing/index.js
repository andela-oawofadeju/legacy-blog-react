import React from 'react';
import ReactDipper from 'react-dipper';
import Header from './Header';
import Footer from './Footer';
// import About from './About';
// import Contact from './Contact';
import Main from './Main';

class Home extends React.Component {

  render() {
    return (
      <div> 
        <Header />
        { /* <About /> */}
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home