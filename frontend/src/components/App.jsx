import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import '../style/hamburger.css';
import Authen from './Authen';

//change this to be better later

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <button className="hamburger hamburger--elastic" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </button>

          <img className="App__logo" src={logo} alt="logo" />
          <h2 className="App__title"> HeroSquare </h2>
        </header>
        <Authen />
      </div>
    );
  }
}

export default App;
