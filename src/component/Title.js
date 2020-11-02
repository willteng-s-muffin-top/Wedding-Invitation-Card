import React, { Component } from 'react';
import './Title.css';
// import logo from '../assets/images/IMG_2251.JPG';

class Title extends Component {
  render(){
    return (
      <section className="flexbox title-container">
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
              2020년 12월 05일
            </div>
            <div className="line">⏤</div>
            <div className="line text-bold color-gray">
              Cafe 포에트
            </div>
          </section>
      </section>
    );
  }
}

export default Title;
