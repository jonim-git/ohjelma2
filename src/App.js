import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Otsikko} from './esimerkki1/components/Otsikko'


function App() {
  return (
    <div className="App">
      <Otsikko title="Minun otsikko"/>
      <Otsikko title="Juu elikkäs"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
