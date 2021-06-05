import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import './style.css';
import Tisk from './Tisk';
import Vizitka from './Vizitka';
import Formular from './Formular';

const App = () => {
  //const [appDataForm, setAppDataForm] = useState('null');
  const [dataFromVizitka, setDataFromVizitka] = useState('null');
  const [appDataForm, setAppDataForm] = useState({
    kamJedu: 'K moři',
    mesto: 'praha',
    odjezd: '2021-06-09',
    pocetZavazadel: '2',
    prijezd: '2021-06-19',
    zeme: 'Slovensko',
  });

  const handleFormOK = (datazform) => {
    setAppDataForm(datazform);
  };
  const handleVizitka = (datazvizitka) => {
    setDataFromVizitka(datazvizitka);
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
