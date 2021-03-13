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
    document.title = 'Aleksandar-JS';
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
        <li>Naziv sajta: Aleksandar-JS </li>
        <li>Programski jezik: JavaScript</li>
        <li>Front-end: React.js</li>
        <li>Back-end: Node.js</li>
        <li>Okvirna tema master rada: </li>
        <li>JavaScript Veb aplikacije: mrežno programiranje i sajber bezbednost</li> 
    </ul>
        Poslednja promena: 13. 3. 2021. //Sub. 
      </header>
    </div>
  );
}

export default App;
