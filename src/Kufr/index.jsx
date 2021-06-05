import React, { useState } from 'react';
import { seznam } from '../seznam';
import './style.css';

const Sekce = ({ jmeno, data }) => {
  const [novaPolozka, setNovaPolozka] = useState('');
  const [seznamPolozek, setSeznamPolozek] = useState(data);
  const handleClickPolozka = () => {
    const novySeznamPolozek = [novaPolozka].concat(seznamPolozek);
    setSeznamPolozek(novySeznamPolozek);
  };

  return (
    <>
      <div>
        <h2 className="nazevSekce">{jmeno}</h2>
        <ul>
          {seznamPolozek.map((polozka, index) => (
            <li key={'il' + index}> {polozka}</li>
          ))}
          <input
            onChange={(e) => setNovaPolozka(e.target.value)}
            type="text"
          ></input>
          <button onClick={handleClickPolozka}>Přidat položku</button>
        </ul>
      </div>
    </>
  );
};

const Polozka = ({ typPolozka }) => (
  <>
    <Sekce jmeno={'Cestovní doklady'} data={typPolozka.cestovniDoklady} />
    <Sekce jmeno={'Oblečení'} data={typPolozka.obleceni} />
    <Sekce jmeno={'Hygiena'} data={typPolozka.hygiena} />
    <Sekce jmeno={'Elektronika'} data={typPolozka.elektronika} />
    <Sekce jmeno={'Ostatní'} data={typPolozka.ostatni} />
  </>
);

const Kufr = ({ typPolozka, index }) => {
  const [openSeznam, setOpenSeznam] = useState(false);
  const handleOpenSeznnam = () => {
    setOpenSeznam(!openSeznam);
  };

  return (
    <>
      <h3>{`Kufr ${index}`}</h3>
      <div className="obrazekkufr" onClick={handleOpenSeznnam}>
        <img src="assets/kufr.png" />
      </div>
      {openSeznam && <Polozka typPolozka={typPolozka} />}
    </>
  );
};

export default Kufr;
