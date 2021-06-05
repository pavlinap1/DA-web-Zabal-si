import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import './style.css';

import Vizitka from './Vizitka';
import Formular from './Formular';
import { useHistory } from 'react-router-dom';

const App = () => {
  let history = useHistory();

  const handleFormOK = () => {
    history.push('/vizitka');
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
              <Vizitka />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};
render(<App />, document.querySelector('#app'));
