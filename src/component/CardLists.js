import React, { Component } from 'react';
import { db } from '../firebase';
import './CardLists.css';

class CardLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [{name: '', comment: ''}],
      containerWidth: 0
    }
    this.containerWidth = React.createRef()
  }
  componentDidMount() {
    this.listenForData();
    console.log(this.containerWidth.current.offsetWidth);
    this.setState({containerWidth: this.containerWidth.current.offsetWidth - 500})

  }

  listenForData() {
      db.collection("comments").orderBy('timestamp', 'desc').onSnapshot((querySnapshot) => {
          let commentsData = [];
          querySnapshot.forEach((doc) => {
              commentsData.push(doc.data());
          });
          this.setState({comments: commentsData});
      });
  }
  render() {
    const comments = [];

    for (let i = 0; i < this.state.comments.length; i++) {
      const topPos = getRandomPosition(0, i/2 * 400);
      const leftPos = getRandomPosition(0, this.state.containerWidth);
      const zIndex = getRandomPosition(0, 2147483647);
      const rotateDef = getRandomPosition(-35, 35);

      const position = {
        position: 'absolute',
        top: topPos,
        left: leftPos,
        zIndex: zIndex,
        transform: `rotate(${rotateDef}deg)`,
      }
      comments.push(
        <div 
          // style={{position: 'absolute', top: `${topPos}`, left: `${leftPos}`, zIndex: `${zIndex}`, transform: `rotate(${rotateDef}deg)`}} 
          style={position} 
          key={i} className="cardbox">
          <h4>{this.state.comments[i].name}</h4>
          <p>{this.state.comments[i].comment}</p>
        </div>);
    };
    return(
      <section ref={this.containerWidth}>
        <h3>Card Lists</h3>
        <div className="card-lists-container">{comments}</div>  
      </section>
    );

    // Private Functions
    function getRandomPosition(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
}

export default CardLists;