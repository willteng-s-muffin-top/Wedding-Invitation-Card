import React, { Component } from 'react';
import './Intro.css';
import bride_flower from '../assets/images/groom_flower.png';

class Intro extends Component {
  render() {
    return(
      <section className="intro-container">
        <article class="intro">
          {/* <img className="crownFlower" src={crown_flower} /> */}
          <img className="brideFlower" src={bride_flower} />
          <h1>인사말</h1>
          <p>하나님의 사랑으로 만나 교제한 저희가<br/>
              더 큰 축복의 관계로 나아가고자<br/>
              결혼 서약을 하려고 합니다.</p>
 
          <p>인생의 가장 중요하고 소중한 날<br/>
          고마운 분들을 모시고<br/>
          함께 기쁨을 나누는 것이 도리이겠으나<br/>
          여러 상황을 고려해 <br/>
          가족들만의 작고 소박한 결혼식을 하기로<br/>
          뜻을 모았습니다.</p>

          <p>마음으로 저희의 새 출발을 축복해 주시고<br/>
          주님 뜻 안에 아름다운 가정 이루기를<br/>
          기도해주시면 감사하겠습니다.</p>
        </article>
        <article className="family-container">
          {/* <h1>소개</h1> */}
          <img className="brideFlower" src={bride_flower} />
          <div className="family-description-container">
            <div className="family-groom">
              {/* <img className="groomFlower" src={groom_flower} /> */}
              <p>김성길 • 이현숙<span className="family-description">의 장남</span></p>
              <p><strong>김희창</strong></p>
            </div>
            <div className="family-bride">
              {/* <img className="brideFlower" src={bride_flower} /> */}
              <p>윤희상 • 고은아<span className="family-description">의 장녀</span></p>
              <p><strong>윤정인</strong></p>
            </div>
          </div>
        </article>
        <img className="brideFlower" src={bride_flower} />
        {/* <img className="groomFlower" src={groom_flower} /> */}
        <article className="bible-container">
          {/* <img className="bible" src={bible} alt="bible" /> */}
          {/* <p className="cross">✝</p> */}
          {/* <img className="groomFlower" src={groom_flower} /> */}
          <p>"나의 사랑하는 자가 내게 말하여 이르기를<br/>나의 사랑, 내 어여쁜 자야 일어나서 함께 가자"</p>
          <p>아가 2장 10절</p>
        </article>
      </section>
    );
  }
}

export default Intro;