import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import './style.css';
import UvodniSTR from './UvodniSTR';
import Vizitka from './Vizitka';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch />
        <Route exact path="/">
          <UvodniSTR />
          <Vizitka />
        </Route>
        <Route exact path="/vizitka"></Route>
        <Switch />
      </Router>
    </>
  );
};
render(<App />, document.querySelector('#app'));
