import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import './style.css';

import Vizitka from './Vizitka';
import Formular from './Formular';

const App = () => {
  const [appDataForm, setAppDataForm] = useState('null');

  const handleFormOK = (datazform) => {
    setAppDataForm(datazform);
  };

  return (
    <>
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Formular onFormOK={handleFormOK} />
            </Route>
            <Route exact path="/vizitka">
              <Vizitka dataToVizitka={appDataForm} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};
render(<App />, document.querySelector('#app'));
