import React, { Component } from 'react';
import './App.css';
import CardList from './../Components/CardList';

class App extends Component {
  render() {
    return (
      <div className="tc">
        <div>
          <header className="App-header">
            <h1>Storm & Athena</h1>
          </header>
        </div>
          <div><CardList /></div>
      </div>
    )
  }
}

export default App;