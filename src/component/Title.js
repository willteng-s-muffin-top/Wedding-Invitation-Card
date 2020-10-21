import React, { Component } from 'react';
import './Title.css';
// import logo from '../assets/images/IMG_2251.JPG';

class Title extends Component {
  render(){
    return (
      <section className="flexbox bg-gray title-container container">
          <h2 className="flexbox title-container-date">
            <span>12</span><span>⏤</span><span>05</span>
          </h2>
          <div>
              {/* <img className="main-img" src={logo}/> */}
          </div>
          <article className="line">
            <span className="text-xl text-bold color-gray">김희창</span> 그리고 <span className="text-xl text-bold color-gray">윤정인</span>
          </article>

          <section className="title-container-details">
            <div className="line">
              2020년 12월 05일 토요일, 2:30pm
            </div>
            <div className="line">⏤</div>
            <div className="line text-bold color-gray">
              Cafe 포에트
            </div>
            <div className="text-xs">
              서울시 마포구 와우산로 14길 12, 1F (상수동 86-10)
            </div >
          </section>
          
      </section>
    );
  }
}

export default Title;
