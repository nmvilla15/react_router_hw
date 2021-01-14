import React from 'react';
import "./App.css";
import Img from "./nicole.JPG"

const About = () => {
  return (
    <div className='me'>
      <h2>Hi! My name is Nicole.</h2> 
      <img className="nicole" src={Img}/>
      <h4>My hobbies include:</h4>
      <ul>
        <li>Home improvement projects</li>
        <li>Dancing </li>
        <li>Gardening</li>
        <li>Fostering dogs</li>
      </ul>
    </div>
  );
};

export default About;
