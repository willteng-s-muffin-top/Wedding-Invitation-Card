/*global kakao*/
import React, { Component } from 'react';

class MapContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 37.55019612556772,
      lng: 126.92373500113264
    }
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=b4166d8779402fc28ba418b06e32fcad&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("venue");
        let options = {
          center: new kakao.maps.LatLng(this.state.lat, this.state.lng),
          level: 4
        };

        const map = new window.kakao.maps.Map(container, options);

        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
          this.state.lat,
          this.state.lng
        );
        // 마커를 생성
        let marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
      });
    };
  }

  render() {
      return (
        <section className="container">
          <h3 className="color-pink">약도</h3>
          <div id="venue" style={{width:"100%", minHeight:"500px"}}></div>
          <article>
            
          </article>
        </section>
      );
  }
}

export default MapContent;