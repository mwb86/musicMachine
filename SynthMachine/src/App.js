import React, { Component } from 'react';
import Machine from './components/Machine.js'
import './App.css';
import Header from './components/Header.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Header />
        </div>
        <div className="App-intro">
        <Machine />
        </div>
      </div>
    );
  }
}

export default App;
