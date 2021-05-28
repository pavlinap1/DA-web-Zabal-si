import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Formular from './Formular';
import './style.css';
import UvodniSTR from './UvodniSTR';
import Vizitka from './Vizitka';

const App = () => {
  return (
    <>
      <UvodniSTR />
      <Formular />
      <Vizitka />
    </>
  );
};
render(<App />, document.querySelector('#app'));
