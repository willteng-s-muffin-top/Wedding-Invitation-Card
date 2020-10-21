import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
  render(){
    return (
      <main className="flexbox">
        <article className="container max-width">
          <h3 className="color-pink">초대</h3>
          <p className="margin bible-verse">
            "너희도 산 돌 같이 신령한 집으로 세워지고 예수 그리스도로 말미암아 하나님이 기쁘게 받으실 신령한 제사를 드릴 거룩한 제사장이 될지니라"<br/>
          </p>
          <p className="margin invite">
            평생 소중한 인연이 되기로 <br/> 약속하는 자리에 초대합니다. <br/> 오셔서 축하해주세요.
          </p>
        </article>

        <article className="bg-gray container w-full">
          <p className="line">
            <span className="name">김성길 • 이현숙</span>의 장남, 김희창
          </p>
          <p className="line">
            <span className="name">윤희상 • 고은아</span>의 장녀, 윤정인
          </p>
        </article>
      </main>
    );
  }
}

export default Intro;
