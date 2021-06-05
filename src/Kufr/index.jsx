import React, { useState } from 'react';
import { seznam } from '../seznam';
import './style.css';

const Sekce = ({ jmeno, data, onPolozkaPridana }) => {
  const [novaPolozka, setNovaPolozka] = useState('');
  const handleClickPolozka = () => {
    const novySeznamPolozek = [novaPolozka].concat(data);
    onPolozkaPridana(novySeznamPolozek);
  };

  return (
    <>
      <div>
        <h2 className="nazevSekce">{jmeno}</h2>
        <ul>
          {data.map((polozka, index) => (
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

const Polozka = ({ typPolozka, onZmenaSeznamu }) => {
  const handlePridanaPolozka = (nazev, data) => {
    onZmenaSeznamu(nazev, data);
  };
  return (
    <>
      <Sekce
        jmeno={'Cestovní doklady'}
        data={typPolozka.cestovniDoklady}
        onPolozkaPridana={(d) => handlePridanaPolozka('Cestovní Doklady', d)}
      />
      <Sekce
        jmeno={'Oblečení'}
        data={typPolozka.obleceni}
        onPolozkaPridana={(d) => handlePridanaPolozka('Oblečení', d)}
      />
      <Sekce
        jmeno={'Hygiena'}
        data={typPolozka.hygiena}
        onPolozkaPridana={(d) => handlePridanaPolozka('Hygiena', d)}
      />
      <Sekce
        jmeno={'Elektronika'}
        data={typPolozka.elektronika}
        onPolozkaPridana={(d) => handlePridanaPolozka('Elektronika', d)}
      />
      <Sekce
        jmeno={'Ostatní'}
        data={typPolozka.ostatni}
        onPolozkaPridana={(d) => handlePridanaPolozka('Ostatní', d)}
      />
    </>
  );
};
const Kufr = ({ typPolozka, index, onZmenaSeznamu }) => {
  const [openSeznam, setOpenSeznam] = useState(false);
  const handleZmenaSeznamu = (nazev, data) => {
    onZmenaSeznamu(nazev, data);
  };
  const handleOpenSeznnam = () => {
    setOpenSeznam(!openSeznam);
  };

  return (
    <>
      <h3>{`Kufr ${index}`}</h3>
      <div className="obrazekkufr" onClick={handleOpenSeznnam}>
        <img src="assets/kufr.png" />
      </div>
      {openSeznam && (
        <Polozka onZmenaSeznamu={handleZmenaSeznamu} typPolozka={typPolozka} />
      )}
    </>
  );
};

export default Kufr;
