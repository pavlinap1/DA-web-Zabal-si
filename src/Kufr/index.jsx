import React, { useState } from 'react';
import './style.css';

const Kufr = ({ typPolozka }) => {
  const zobrazSeznam = () => {
    console.log(typPolozka);
  };
  return (
    <>
      <div className="obrazekkufr" onClick={zobrazSeznam}>
        <img src="assets/kufr.png" />
      </div>
    </>
  );
};

export default Kufr;
