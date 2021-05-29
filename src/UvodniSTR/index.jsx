import React, { useState } from 'react';
import Formular from '../Formular';
import './style.css';

const UvodniSTR = () => {
  return (
    <>
    <div className="body">
      <img src="assets/mapa.jpg" />
      <p>
        Vítáme Vás na stránce Zabal si, která slouží k plánování dovolené či
        jiné cesty.
      </p>
      <p>Na začátku si můžete vyplnit formulář o vaší cestě.</p>
      <Formular className="form" />
    </div>
    </>
  );
};

export default UvodniSTR;
//https://www.codegrepper.com/code-examples/javascript/how+to+scroll+window+onclick+button+scrollbar+js

//https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click/18071231

//Obrázek už funguje, všechny img dávat do složky assets
//na button onClick se stylem (display:none) pro zobrazení formuláře
//Opravit fail s tlačítkem (možná bude fungovat až se obě komponenty nějak spojí)
