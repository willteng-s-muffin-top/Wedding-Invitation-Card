import React, {Component} from 'react';
import Title from './component/Title';
import Comment from './component/Comment';
import CardLists from './component/CardLists';
import Footer from './component/Footer';
import './App.css';
import './component/Card.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <section className="card-container bg-gray">
          <Title/>
          <Comment/>
        </section>
        <CardLists/>
        {/* <Footer/> */}
      </main>
    );
  }
}

export default App;
