import React from 'react';
import './style.css';
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
  return (
    <>
      <p>
        Cílová země je {dataToVizitka.zeme} ({dataToVizitka.mesto}) a jedu
        {dataToVizitka.kamJedu}
      </p>
      <p>Dopravní prostředek je {dataToVizitka.typDopravy}</p>
      <p>
        Od {dataToVizitka.odjezd} do {dataToVizitka.prijezd}
      </p>
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
