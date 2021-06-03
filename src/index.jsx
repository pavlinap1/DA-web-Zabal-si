import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import './style.css';
import UvodniSTR from './UvodniSTR';
import Vizitka from './Vizitka';
import MDoklady from './Sablony/MDoklady';
import MElektronika from './Sablony/MElektronika';
import MHygiena from './Sablony/MHygiena';
import MObleceni from './Sablony/MObleceni';
import MOstatni from './Sablony/MOstatni';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch />
        <Route exact path="/">
          <UvodniSTR />
          <Vizitka />
          <MDoklady />
          <MElektronika />
          <MHygiena />
          <MObleceni />
          <MOstatni />
        </Route>
        <Route exact path="/vizitka"></Route>
        <Switch />
      </Router>
    </>
  );
};
render(<App />, document.querySelector('#app'));
