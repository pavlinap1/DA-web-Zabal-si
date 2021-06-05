import React, { useState } from 'react';
import './style.css';

const Sekce = () => {};

const Polozka = ({ typPolozka }) => {
  return <>blablabla</>;
};

const Kufr = ({ typPolozka }) => {
  const [openSeznam, setOpenSeznam] = useState(false);
  const handleOpenSeznnam = () => {
    setOpenSeznam(!openSeznam);
  };

  return (
    <>
      <div className="obrazekkufr" onClick={handleOpenSeznnam}>
        <img src="assets/kufr.png" />
      </div>
      {openSeznam && <Polozka typPolozka={typPolozka} />}
    </>
  );
};

export default Kufr;
