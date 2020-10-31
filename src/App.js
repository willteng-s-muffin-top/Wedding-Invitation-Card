import React, {Component} from 'react';
import './App.css';
import Title from './component/Title';
import Intro from './component/Intro';
import Calendar from './component/Calendar';
import Comment from './component/Comment';
import Footer from './component/Footer';

// import Calendar from './component/Calendar';
import Map from './component/Map';
// import Comment from './component/Comment';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Title/>
        <Intro/>
        <Calendar/>
        <Comment/>
        <Map/>
        <Footer/>
      </main>
    );
  }
}

export default App;
