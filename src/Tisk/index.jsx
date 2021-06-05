import React, { useState } from 'react';

const Tisk = ({ dataToTisk }) => {
  console.log(dataToTisk);
  return (
    <>
      <p>
        Jedeš do {dataToTisk.zeme} {dataToTisk.mesto} od {dataToTisk.odjezd} do{' '}
        {dataToTisk.prijezd}, zavazadel máš {dataToTisk.pocetZavazadel} a jedeš{' '}
        {dataToTisk.kamJedu}.
      </p>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default Tisk;
