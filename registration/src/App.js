import React, { Component } from 'react';
import logo from './availitylogo.jpg';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img href="https://www.availity.com" src={logo} className="App-logo" alt="logo" />
          <p>
            Register
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
