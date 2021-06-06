import React from 'react';
const TiskSekce = ({ obsah, jmeno }) => {
  return (
    <>
      <h4>{jmeno}</h4>
      <ul>
        {obsah.map((polozka, index) => (
          <li key={'il' + index}>{polozka}</li>
        ))}
      </ul>
    </>
  );
};
const ObsahKufru = ({ obsah }) => {
  return (
    <>
      <h2>Kufr {obsah.id + 1}</h2>
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
        Jedeš do {dataToVizitka.zeme} {dataToVizitka.mesto} od{' '}
        {dataToVizitka.odjezd} do {dataToVizitka.prijezd}, zavazadel máš{' '}
        {dataToVizitka.pocetZavazadel} a jedeš {dataToVizitka.kamJedu}.
      </p>

      {dataKufrSeznam.map((i, index) => (
        <ObsahKufru key={'il' + index} obsah={i} />
      ))}
    </>
  );
};

export default Tisk;
