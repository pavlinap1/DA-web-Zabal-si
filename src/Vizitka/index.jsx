import React, { useState, useEffect } from 'react';

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

const Vizitka = () => {
  return (
    <div>
      <KurzovniListek />
    </div>
  );
};

export default Vizitka;