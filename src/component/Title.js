import React from 'react';
import './Title.css';
import logo from '../assets/images/IMG_2251.JPG';

function Title() {
  return (
    <div>
        <h1>12<br/>⏤<br/>05<br/></h1>
        <div>
            <img src={logo}/>
        </div>
    </div>
  );
}

export default Title;
