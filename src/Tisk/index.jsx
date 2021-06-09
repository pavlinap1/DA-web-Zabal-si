import React from 'react';
import './style.css';
import { format } from 'date-fns';

const TiskSekce = ({ obsah, jmeno }) => {
  return (
    <>
      <h4>{jmeno}</h4>
      <ul>
        {obsah.map((polozka, index) => (
          <li key={'il' + index}>
            {polozka}
            <div className="checkbox"></div>
          </li>
        ))}
      </ul>
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
      <p> Cílová země: {dataToVizitka.zeme} </p>
      <p> Město: {dataToVizitka.mesto}</p>
      <p> Účel cesty: {dataToVizitka.kamJedu} </p>
      <p> Odjezd: {format(new Date(datumOdjezd), 'dd. MM. yyyy')}</p>
      <p> Příjezd: {format(new Date(datumPrijezd), 'dd. MM. yyyy')}</p>
      <p> Počet zavazadel {dataToVizitka.pocetZavazadel} </p>

      {dataKufrSeznam
        .sort((a, b) => a.id - b.id)
        .map((i, index) => (
          <ObsahKufru key={'il' + index} obsah={i} />
        ))}
    </>
  );
};

export default Tisk;
