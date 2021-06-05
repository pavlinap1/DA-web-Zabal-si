import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import './style.css';

import Vizitka from './Vizitka';
import MDoklady from './Sablony/MDoklady';
import MElektronika from './Sablony/MElektronika';
import MHygiena from './Sablony/MHygiena';
import MObleceni from './Sablony/MObleceni';
import MOstatni from './Sablony/MOstatni';
import HDoklady from './Sablony/HDoklady';
import HElektronika from './Sablony/HElektronika';
import HHygiena from './Sablony/HHygiena';
import HObleceni from './Sablony/HObleceni';
import HOstatni from './Sablony/HOstatni';
import CDoklady from './Sablony/CDoklady';
import CElektronika from './Sablony/CElektronika';
import CHygiena from './Sablony/CHygiena';
import CObleceni from './Sablony/CObleceni';
import COstatni from './Sablony/COstatni';
import SDoklady from './Sablony/SDoklady';
import SElektronika from './Sablony/SElektronika';
import SHygiena from './Sablony/SHygiena';
import SObleceni from './Sablony/SObleceni';
import SOstatni from './Sablony/SOstatni';
import Formular from './Formular';

const App = () => {
  return (
    <>
      <div className="container">
        <Router>
          <Header />
          <Switch />
          <Route exact path="/">
            <Formular />
            <Vizitka />
            <MDoklady />
            <MElektronika />
            <MHygiena />
            <MObleceni />
            <MOstatni />
            <HDoklady />
            <HElektronika />
            <HHygiena />
            <HObleceni />
            <HOstatni />
            <CDoklady />
            <CElektronika />
            <CHygiena />
            <CObleceni />
            <COstatni />
            <SDoklady />
            <SElektronika />
            <SHygiena />
            <SObleceni />
            <SOstatni />
          </Route>
          <Route exact path="/vizitka"></Route>
          <Switch />
        </Router>
      </div>
    </>
  );
};
render(<App />, document.querySelector('#app'));
