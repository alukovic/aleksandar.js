import logo from './logo.svg';
import aca1 from './aca1.png';
import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Helmet>
          <title>Aleksandar-JS</title>
        </Helmet>

        <img src={aca1} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://aleksandarlukovic.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aleksandar Luković
          
        </a>

    <ul className="ulApp1">
        <li>Naziv sajta: Aleksandar-JS </li>
        <li>Programski jezik: JavaScript</li>
        <li>Front-end: React.js</li>
        <li>Back-end: Node.js</li>
        <li>Okvirna tema master rada: Sajber bezbednost u JavaScript Veb aplikacijama</li>
    </ul>
        Poslednja promena: 9. 3. 2021. //Uto. 
      </header>
    </div>
  );
}

export default App;
