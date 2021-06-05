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
