import React from 'react';
import Nav from '../components/nav/nav';

const About = () => {
    return (    
    <div>
     <Nav /> 
        <h1>About us</h1>;
        <p>Team: TAVO, DAVID, CAREN, LUIS, JOE</p>
        <p><button class="w3-button w3-light-grey w3-block">Contact One of us</button></p>
    </div>
    );
  };
  

  export default About;//     // but since zipCodes are static here, it's just simulating a fetch


