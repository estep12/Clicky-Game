import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './components/Nav'
import Header from './components/Header'
import LostCards from './components/LostCards'
import cards from "./cards.json"
import './App.css';



class App extends Component {

  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };


  render() {
    return (
      <div>
        <Nav></Nav>
        <Header></Header>
      </div>
    );
  }
}

export default App;
