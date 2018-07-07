import React, { Component } from 'react';
import Nav from './components/Nav'
import cards from "./cards.json"
import './App.css';

const clicked = [];

class App extends Component {

  state = {
    cards: cards,
    correct: 0,
    topScore: 0,
    headline: "Click an image to begin!"
  };

  imageClick = event => {
    
    console.log(event.target.id)

    // clicked.push(event.target.id)

    if(clicked.includes(event.target.id)) {
      this.setState({headline: "You Guessed Incorrectly"})
    }
    else {
      this.setState({headline: "You Guessed Correctly!"});
      this.setState({correct: this.state.correct +1});
      this.setState({topScore: this.state.topScore +1})
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
          <div key={cards.id} className="image-holder" onClick={this.imageClick} >
            <img src={cards.image} alt={cards.name}/>
          </div>
        ))}
        </main>
      </div>
    );
  }
}

export default App;
