import React, { useState, useEffect } from 'react';
import { seznam } from '../seznam';
import Kufr from '../Kufr';
import './style.css';
import { useHistory } from 'react-router-dom';
const Mena = ({ select }) => {
  const [from, setFrom] = useState('');
  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${select}&to=CZK`)
      .then((resp) => resp.json())
      .then((json) => setFrom(json.rates.CZK));
  }, [select]);
  return (
    <div className="rate">
      <div className="rate__currency">1 {select}</div>
      <div>=</div>
      <div className="rate__value">{from} CZK</div>
    </div>
  );
};

const KurzovniListek = () => {
  const [kurz, setKurz] = useState('USD');
  const zmenaKurzu = (e) => {
    setKurz(e.target.value);
  };
  return (
    <>
      <div>
        <h1>Kurzovní lístek</h1>
        <form>
          <label>
            <select value={kurz} onChange={zmenaKurzu}>
              <option value="USD">Americký dolar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">Britská libra</option>
              <option value="BGN">Bulharský lev</option>
              <option value="DKK">Dánský koruna</option>
              <option value="HRK">Chorvatský kuna</option>
              <option value="ISK">Islandská koruna</option>
              <option value="CHF">Švýcarský frank</option>
              <option value="HUF">Maďarský forint</option>
              <option value="TRY">Turecká lira</option>
              <option value="SEK">Švédská koruna</option>
              <option value="RUB">Ruský rubl</option>
              <option value="PLN">Polský zlotý</option>
              <option value="NOK">Norská koruna</option>
            </select>
          </label>
        </form>
        <Mena select={kurz} />
      </div>
    </>
  );
};

const Vizitka = ({ dataToVizitka, onTiskOK }) => {
  let history = useHistory();
  const typSeznam = seznam.find((i) => dataToVizitka.kamJedu === i.name);
  const handleClickTisk = () => {
    const dataFromVizitka = { dataToVizitka, dataKufrSeznam };
    onTiskOK(dataFromVizitka);
    history.push('/tisk');
  };

  const handleKufrChange = (dataZKufru) => {
    dataKufrSeznam = dataKufrSeznam.filter((i) => dataZKufru.id !== i.id);
    dataKufrSeznam.push(dataZKufru);
    console.log(dataKufrSeznam);
  };
  let dataKufrSeznam = [];

  const kufrSeznam = [];
  for (let i = 0; i < dataToVizitka.pocetZavazadel; i += 1) {
    const copySeznam = { ...typSeznam };
    kufrSeznam.push(
      <Kufr
        key={'kuf' + i}
        index={i + 1}
        typPolozka={copySeznam}
        onKufrChange={handleKufrChange}
      />,
    );
  }

  return (
    <>
      <div className="vizitka">
        <p>
          Jedeš do {dataToVizitka.zeme} {dataToVizitka.mesto} od{' '}
          {dataToVizitka.odjezd} do {dataToVizitka.prijezd}, zavazadel máš{' '}
          {dataToVizitka.pocetZavazadel} a jedeš {dataToVizitka.kamJedu}.
        </p>
        <KurzovniListek />
        {kufrSeznam}
        <button onClick={handleClickTisk}>Mám nachystáno, chci tisknout</button>
      </div>
    </>
  );
};

export default Vizitka;
