import React, { useState } from 'react';
import './style.css';

const Sekce = ({ jmeno, data }) => (
  <>
    <div>
      <h2 className="nazevSekce">{jmeno}</h2>
      <ul>
        {data.map((polozka, index) => (
          <li key={'il' + index}> {polozka}</li>
        ))}
      </ul>
    </div>
  </>
);

const Polozka = ({ typPolozka }) => (
  <>
    <Sekce jmeno={'Oblečení'} data={typPolozka.obleceni} />
  </>
);

const Kufr = ({ typPolozka }) => {
  const zobrazSeznam = () => {
    console.log(typPolozka);
  };
  return (
    <>
      <div className="obrazekkufr" onClick={zobrazSeznam}>
        <img src="assets/kufr.png" />
      </div>
      <Polozka typPolozka={typPolozka} />
    </>
  );
};

export default Kufr;
