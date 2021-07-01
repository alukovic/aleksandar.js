import React, { useEffect } from 'react';
import logo from './logo.svg';
import aca1 from './aca1.png';

import './App.css';
/*
//import { Helmet } from 'react-helmet';
        <Helmet>
          <title>Aleksandar-JS</title>
        </Helmet>
*/
function App() {

  useEffect(() => {
    document.title = 'Aleksandar Luković | JavaScript';
  });

  return (
    <div className="App">
      <header className="App-header">

        <img src={aca1} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://aleksandarlukovic.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aleksandar Luković
            
        </a>

        <a href="https://aleksandarlukovic.herokuapp.com/root/opis">Biografija</a>
    <ul className="ulApp1">
        <li>Naziv sajta: Aleksandar Luković | JavaScript </li>
        <li>Programski jezik: JavaScript</li>
        <li>Front-end: React.js</li>
        <li>Back-end: Node.js</li>
        <li>Okvirna tema master rada: </li>
        <li>Implementacija softverskog rešenja za obradu multimedijalnih signala pomoću JavaScripta</li> 
    </ul>
        Poslednja promena: 1.7.2021. //Čet. 
      </header>
    </div>
  );
}

export default App;
