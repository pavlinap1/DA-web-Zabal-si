import React, { useState, useEffect } from 'react';
import { seznam } from '../seznam';
import Kufr from '../Kufr';
import './style.css';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';

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

    const dataZKufru = {
      id: i + 1,
      cestovniDoklady: copySeznam.cestovniDoklady,
      obleceni: copySeznam.obleceni,
      hygiena: copySeznam.hygiena,
      elektronika: copySeznam.elektronika,
      ostatni: copySeznam.ostatni,
    };

    dataKufrSeznam.push(dataZKufru);

    kufrSeznam.push(
      <Kufr
        key={'kuf' + i}
        index={i + 1}
        typPolozka={copySeznam}
        onKufrChange={handleKufrChange}
      />,
    );
  }
  const datumOdjezd = dataToVizitka.odjezd;
  const datumPrijezd = dataToVizitka.prijezd;
  return (
    <>
      <div className="vizitka">
        <h1>Zabal si</h1>
        <table>
          <tbody>
            <tr>
              <th className="zaobleni-tab-1">Cílová destinace</th>
              <th className="zaobleni-tab-2">
                {dataToVizitka.zeme}, {dataToVizitka.mesto}
              </th>
            </tr>
            <tr>
              <th>Účel cesty</th>
              <th>{dataToVizitka.kamJedu}</th>
            </tr>
            <tr>
              <th>Od - do</th>
              <th>
                {format(new Date(datumOdjezd), 'dd. MM. yyyy')} -{' '}
                {format(new Date(datumPrijezd), 'dd. MM. yyyy')}
              </th>
            </tr>
            <tr>
              <th className="zaobleni-tab-3">Počet zavazadel</th>
              <th className="zaobleni-tab-4">{dataToVizitka.pocetZavazadel} </th>
            </tr>
          </tbody>
        </table>
        <div>{kufrSeznam}</div>
        <div className="vizitka-tisk">
          <button className="btn-tisk" onClick={handleClickTisk}>
            Tisk
          </button>
        </div>
      </div>
    </>
  );
};

export default Vizitka;
