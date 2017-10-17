import React from 'react';
import { Link } from 'react-router'

class Hero extends React.Component {

  render() {
    return(
     <div>   
      <div className="blog-main">
        <div className="landing">
          <h1 className="bold  text-center col m8 offset s8">Interesting Diva</h1>         
          <h2 className="identity text-center col m8 offset s8">I am a software developer and an unrepentant reader</h2>     
        </div>
      </div>
    </div>
    );
  }
}

export default Hero;