import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Zabal si</h1>
    </header>
    <main>
      <p>
        Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí{' '}
        <a href="https://www.npmjs.com/package/create-czechitas-app">
          create-czechitas-app
        </a>
        .
      </p>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);

render(<App />, document.querySelector('#app'));
