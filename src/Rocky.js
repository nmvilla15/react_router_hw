import React from 'react';
import Img from "./rocky.png";
import "./App.css";

const Rocky = () => {
  return (
    <div className="dog">
      <p>I have the best dog in the whole world.</p> 
      <p>Isn't he cute?</p>
      <img className="rocky" src={Img} alt="super cute dog" />
    </div>
  );
};

export default Rocky;
