import React, {Component} from 'react';
import './App.css';
import Title from './component/Title';
import Intro from './component/Intro';
import Calendar from './component/Calendar';
import Comment from './component/Comment';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <Intro/>
        <Calendar/>
        <Comment/>
      </div>
    );
  }
}

export default App;
