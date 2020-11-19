import React, {Component} from 'react';
import Intro from './component/Intro';
import Title from './component/Title';
import Comment from './component/Comment';
import CardLists from './component/CardLists';
import './App.css';
import './component/Card.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <div className="mobile"><Title/></div>
        <Intro/>
        <section className="card-container bg-paper-main">
          <div className="desktop">
            <Title/>
          </div>
          <Comment/>
        </section>
        <CardLists/>
      </main>
    );
  }
}

export default App;
