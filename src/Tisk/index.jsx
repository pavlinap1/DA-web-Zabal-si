import React from 'react';
import './style.css';
import { format } from 'date-fns';

const TiskSekce = ({ obsah, jmeno }) => {
  return (
    <>
      <h4>{jmeno}</h4>
      <div className="seznam">
        <ul className="zmena-seznamu">
          {obsah.map((polozka, index) => (
            <li className="polozky" key={'il' + index}>
              <div className="checkbox"></div>
              {polozka}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const ObsahKufru = ({ obsah }) => {
  return (
    <>
      <h2>Kufr {obsah.id}</h2>
      <TiskSekce obsah={obsah.cestovniDoklady} jmeno="Cestovní doklady" />
      <TiskSekce obsah={obsah.obleceni} jmeno="Oblečení" />
      <TiskSekce obsah={obsah.hygiena} jmeno="Hygiena" />
      <TiskSekce obsah={obsah.elektronika} jmeno="Elektronika" />
      <TiskSekce obsah={obsah.ostatni} jmeno="Ostatní" />
    </>
  );
};
//Místo kufru je lepší to pojmenovat zavazadlo
const Tisk = ({ dataToTisk: { dataToVizitka, dataKufrSeznam } }) => {
  const datumOdjezd = dataToVizitka.odjezd;
  const datumPrijezd = dataToVizitka.prijezd;
  return (
    <>
      <div className="tisk-hlavicka">
        <h1>
          {dataToVizitka.zeme}, {dataToVizitka.mesto}
        </h1>
        <p> {dataToVizitka.kamJedu} </p>
        <p>
          Od {format(new Date(datumOdjezd), 'dd. MM. yyyy')} do{' '}
          {format(new Date(datumPrijezd), 'dd. MM. yyyy')}
        </p>
        <p> Počet zavazadel: {dataToVizitka.pocetZavazadel} </p>
      </div>
      {dataKufrSeznam
        .sort((a, b) => a.id - b.id)
        .map((i, index) => (
          <ObsahKufru key={'il' + index} obsah={i} />
        ))}
    </>
  );
};

export default Tisk;
