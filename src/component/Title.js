import React, { Component } from 'react';
import './Title.css';
import logo from '../assets/images/profile.JPG';

class Title extends Component {
  render(){
    return (
      <section className="flexbox title-container">
        <h2 className="flexbox title-container-date">
          <span>12</span><span>⏤</span><span>05</span>
        </h2>

        <img className="main-img" src={logo}/>

        <p className="title-name">
          <span className="text-xl text-bold color-gray">김희창</span> 그리고 <span className="text-xl text-bold color-gray">윤정인</span>
        </p>

        <p className="title-container-details">오랜 기다림 끝에 <br/> 2020년 12월 05일<br/> 결혼합니다</p>
      </section>
    );
  }
}

export default Title;
