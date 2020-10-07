import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render(){
    return (
      <div className="flexbox">
        <article className="margin max-width">
          "너희도 산 돌 같이 신령한 집으로 세워지고 <br/>
          예수 그리스도로 말미암아 하나님이 기쁘게 받으실 신령한 제사를 드릴 거룩한 제사장이 될지니라"<br/>
        </article>
        <article className="margin max-width">
          평생 소중한 인연이 되기로 약속하는 자리에 초대합니다. 오셔서 축하해주세요.
        </article>
        <article className="line">
          <span className="name">김성길 • 이현숙</span>의 장남, 김희창
        </article>
        <article className="line">
          <span className="name">윤희상 • 고은아</span>의 장녀, 윤정인
        </article>
      </div>
    );
  }
}

export default Intro;
