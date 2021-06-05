import React, { useState } from 'react';
import './style.css';

const Sekce = () => {};

const Polozka = ({ typPolozka }) => <>blablabla</>;

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
