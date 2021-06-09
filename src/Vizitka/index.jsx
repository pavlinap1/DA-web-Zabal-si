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
        <p> Cílová země: {dataToVizitka.zeme} </p>
        <p> Město: {dataToVizitka.mesto}</p>
        <p> Účel cesty: {dataToVizitka.kamJedu} </p>
        <p> Odjezd: {format(new Date(datumOdjezd), 'dd. MM. yyyy')}</p>
        <p> Příjezd: {format(new Date(datumPrijezd), 'dd. MM. yyyy')}</p>
        <p> Počet zavazadel {dataToVizitka.pocetZavazadel} </p>

        {kufrSeznam}
        <button onClick={handleClickTisk}>Mám nachystáno, chci tisknout</button>
      </div>
    </>
  );
};

export default Vizitka;
