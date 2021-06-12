import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import Tisk from './Tisk';
import Vizitka from './Vizitka';
import Formular from './Formular';

const App = () => {
  const [appDataForm, setAppDataForm] = useState('null');
  const [dataFromVizitka, setDataFromVizitka] = useState(null);

  const handleFormOK = (datazform) => {
    setAppDataForm(datazform);
  };
  const handleVizitka = (datazvizitka) => {
    setDataFromVizitka(datazvizitka);
  };
  return (
    <>
      <div className="container hlavniStranka">
        <Router>
          <Switch>
            <Route exact path="/">
              <Formular onFormOK={handleFormOK} />
            </Route>
            <Route exact path="/vizitka">
              <Vizitka onTiskOK={handleVizitka} dataToVizitka={appDataForm} />
            </Route>
            <Route exact path="/tisk">
              <Tisk dataToTisk={dataFromVizitka} />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};
render(<App />, document.querySelector('#app'));
