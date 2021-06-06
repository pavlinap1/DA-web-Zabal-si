import React, { useState } from 'react';

const Tisk = ({ dataToTisk: { dataToVizitka, dataKufrSeznam } }) => {
  const ObsakKufru = () => {};
  return (
    <>
      <p>
        Jedeš do {dataToVizitka.zeme} {dataToVizitka.mesto} od{' '}
        {dataToVizitka.odjezd} do {dataToVizitka.prijezd}, zavazadel máš{' '}
        {dataToVizitka.pocetZavazadel} a jedeš {dataToVizitka.kamJedu}.
      </p>
      <ul>
        {typSeznam.obleceni.map((polozka, index) => (
          <li key={'il' + index}> {polozka}</li>
        ))}
      </ul>
      <ObsakKufru />
    </>
  );
};

export default Tisk;
