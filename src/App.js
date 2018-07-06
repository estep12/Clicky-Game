import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav'
// import Header from './components/Header'
import LostCards from './components/LostCards'
import cards from "./cards.json"
import './App.css';

const clicked = [];

class App extends Component {

  state = {
    cards: cards,
    correct: 0,
    topScore: 0,
    clicked: false,
    headline: "Click and image to begin!"
  };

  imageClick = (event) => {
    event.preventDefault;
    if(this.state.clicked === false) {
    console.log(event.target.key)
    this.setState({headline: "You Guessed Correctly!"});
    this.setState({score: this.state.correct +1});
    this.setState({topScore: this.state.topScore +1})
    this.setState({clicked: true});

    }
    else {
      this.setState({headline: "You Guessed Incorrectly"})
    }
  }


  render() {
    return (
      <div>
        <Nav
         correct={this.state.correct}
         topScore={this.state.topScore}
         headline={this.state.headline}
         />

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
