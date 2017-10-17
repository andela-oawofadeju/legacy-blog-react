import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component {
  render() {
    return(
       <footer>
        <div className="container footer-extra">
          <div className="row">
            <div className="socials">
              <SocialIcon url="https://www.facebook.com/olayemi.awofadeju" color="#000000" style={{ height: 25, width: 25 }}/>
              <SocialIcon url="https://twitter.com/interestn_diva" color="#000000" style={{ height: 25, width: 25 }}/>             
              <SocialIcon url="https://medium.com/@olayemifolakemi" color="#000000" style={{ height: 25, width: 25 }}/>
              <SocialIcon url="https://www.linkedin.com/in/olayemi-awofadeju-416b75ab/" color="#000000" style={{ height: 25, width: 25 }}/>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;