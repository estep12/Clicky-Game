import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav'
import Header from './components/Header'
import LostCards from './components/LostCards'
import cards from "./cards.json"
import './App.css';



class App extends Component {

  state = {
    cards: cards,
    picked: [],
    correct: 0,
    topscore: 0
  };


  render() {
    return (
      <div>
        <Nav></Nav>
        <main className="container">
        {this.state.cards.map((cards) => (
          <div key={cards.id} className="image-holder" onClick={this.imageClick} clicked={this.state.clicked}>
            <img src={cards.image} alt={cards.name}/>
          </div>
        ))}
        </main>
      </div>
    );
  }
}

export default App;
