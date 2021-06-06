import React, { useState } from 'react';
import { seznam } from '../seznam';
import './style.css';

const Sekce = ({ jmeno, data, onSekceZmena }) => {
  const [novaPolozka, setNovaPolozka] = useState('');
  const handleClickPolozka = () => {
    const novySeznamPolozek = [novaPolozka].concat(data);
    onSekceZmena(novySeznamPolozek);
  };
  const handleOdebratPolozku = (polozka) => {
    const polozkyPoOdebrani = data.filter((i) => i !== polozka);
    onSekceZmena(polozkyPoOdebrani);
  };

  return (
    <>
      <div>
        <h2 className="nazevSekce">{jmeno}</h2>
        <ul>
          {data.map((polozka, index) => (
            <li key={'il' + index}>
              {' '}
              {polozka}
              <button
                onClick={() => {
                  handleOdebratPolozku(polozka);
                }}
              >
                Odebrat položku
              </button>
            </li>
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
  const handleSekceZmena = (nazev, data) => {
    onZmenaSeznamu(nazev, data);
  };
  return (
    <>
      <Sekce
        jmeno={'Cestovní doklady'}
        data={typPolozka.cestovniDoklady}
        onSekceZmena={(d) => handleSekceZmena('cestovniDoklady', d)}
      />
      <Sekce
        jmeno={'Oblečení'}
        data={typPolozka.obleceni}
        onSekceZmena={(d) => handleSekceZmena('obleceni', d)}
      />
      <Sekce
        jmeno={'Hygiena'}
        data={typPolozka.hygiena}
        onSekceZmena={(d) => handleSekceZmena('hygiena', d)}
      />
      <Sekce
        jmeno={'Elektronika'}
        data={typPolozka.elektronika}
        onSekceZmena={(d) => handleSekceZmena('elektronika', d)}
      />
      <Sekce
        jmeno={'Ostatní'}
        data={typPolozka.ostatni}
        onSekceZmena={(d) => handleSekceZmena('ostatni', d)}
      />
    </>
  );
};

const Kufr = ({ typPolozka, index, onKufrChange }) => {
  const [stateSeznam, setStateSeznam] = useState(typPolozka);
  const [openSeznam, setOpenSeznam] = useState(false);
  const handleZmenaSeznamu = (name, data) => {
    const newSeznam = { ...stateSeznam };
    if (name === 'cestovniDoklady') {
      newSeznam.cestovniDoklady = data;
    } else if (name === 'obleceni') {
      newSeznam.obleceni = data;
    } else if (name === 'hygiena') {
      newSeznam.hygiena = data;
    } else if (name === 'elektronika') {
      newSeznam.elektronika = data;
    } else if (name === 'ostatni') {
      newSeznam.ostatni = data;
    } else {
      console.log('Nenalezeno ' + name);
    }
    setStateSeznam(newSeznam);

    const dataZKufru = {
      id: index,
      cestovniDoklady: newSeznam.cestovniDoklady,
      obleceni: newSeznam.obleceni,
      hygiena: newSeznam.hygiena,
      elektronika: newSeznam.elektronika,
      ostatni: newSeznam.ostatni,
    };

    onKufrChange(dataZKufru);
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
        <Polozka onZmenaSeznamu={handleZmenaSeznamu} typPolozka={stateSeznam} />
      )}
    </>
  );
};

export default Kufr;
