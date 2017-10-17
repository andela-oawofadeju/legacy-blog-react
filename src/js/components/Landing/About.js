import React, { Component } from 'react';
import { Icon, Col, Row } from 'react-materialize';

class About extends React.Component {
render() {
    return (            

            <article >
                <Row>
                <div className="about-container">
                <div className="text">
                  <div className="paralla">        
                    <section>
                        <p className="intro bold-span text-center"><Icon>description</Icon> Introduction</p>
                          <p className="about-me">I am Olayemi(empath). I love technology and I am passionate about
                                making the world a better place in any way I can.<br />
                                I love exploring, travelling, reading great stuff and research.<br />
                                I am proficient in React js, Node js, Express js and Mongo-db<br />
                            </p>            
                      </section>
                      </div>
                  </div>  
                </div>
            
                </Row>
                <div className="wrapper"  style={{ marginBottom: 20}}>
                  <Row >
                    <Col s={12} m={4}>
                      <section>
                        <p className="bold-span text-center"><Icon>desktop_mac</Icon> What I do</p>
                        <p className="about-you">I love solitude and nature<br />
                        I love learning something new everyday, so far it's value-adding<br />
                        I am developer with a great eye for design and creativity<br /> I am a writer, obviously a blogger and problem solver</p>
                      </section>
                    </Col>
                    <Col s={12} m={4}>
                      <section>
                        <p className="bold-span text-center"><Icon>view_headline</Icon> Characteristics of me!</p>
                        <p className="about-you">I love solitude and nature<br />
                        I love learning something new everyday, so far it's value-adding<br />
                        I am developer with a great eye for design and creativity<br /> I am a writer, obviously a blogger and problem solver</p>
                      </section>
                    </Col>
                    <Col s={12} m={4}>
                      <section>
                        <p className="bold-span text-center"><Icon>view_headline</Icon> Characteristics of me!</p>
                        <p className="about-you">I love solitude and nature<br />
                        I love learning something new everyday, so far it's value-adding<br />
                        I am developer with a great eye for design and creativity<br /> I am a writer, obviously a blogger and problem solver</p>
                      </section>
                      
                    </Col>
                  </Row>                  
                </div>
              </article>     
    );
  }
}

export default About;