import React, { Component } from 'react';
import './Title.css';
import logo from '../assets/images/IMG_2251.JPG';

class Title extends Component {
  render(){
    return (
      <div className="flexbox bg-color">
          <h2 className="flexbox margin"><span>12</span><span>⏤</span><span>05</span></h2>
          <div>
              <img className="main-img" src={logo}/>
          </div>
          <article className="line">
            <span className="name">김희창</span> 그리고 <span className="name">윤정인</span>
          </article>
          <article className="line">
            2020년 12월 05일 토요일,  3pm
          </article>
          <article className="line">⏤</article>
          <article className="line">
            Cafe 포에트
          </article>
          <article>
            서울시 마포구 와우산로 14길 12, 1F (상수동 86-10)
          </article >
          <footer className="margin"></footer>
          
      </div>
    );
  }
}

export default Title;
