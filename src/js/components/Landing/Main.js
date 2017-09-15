import React from 'react';
import { Link } from 'react-router'

class Hero extends React.Component {

  render() {
    return(
     <div>   
      <div className="blog-main">
        <div className="landing">       
          <h1><strong className="bold">Interesting Diva</strong></h1>         
          <span className="welcome">Welcome to my website</span>     
        </div>
      </div>
    </div>
    );
  }
}

export default Hero;