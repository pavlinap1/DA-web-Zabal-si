import React, { useState } from 'react';
import './style.css';

const VyberZeme = ({ zeme }) => {
  return (
    <>
      <option value="Česká republika">Česká republika</option>
      <option value="Slovensko">Slovensko</option>
      <option value="Chorvatsko">Chorvatsko</option>
      <option value="Itálie">Itálie</option>
    </>
  );
};

const Formular = () => {
  const [zeme, setZeme] = useState('Česká republika');
  const [mesto, setMesto] = useState('');
  const [prijezd, setPrijezd] = useState('');
  const [odjezd, setOdjezd] = useState('');
  const [pocetZavazadel, setPocetZavazadel] = useState('0');
  const [kamJedu, setKamJedu] = useState('K moři');
  const [openForm, setOpenForm] = useState(false);
  const handleClick = () => {
    setOpenForm(!openForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Uživatel jede do ${zeme} do ${mesto}, má ${pocetZavazadel} zavazadel a jede ${kamJedu}. Odjíždí ${odjezd} a přijíždí ${prijezd}`,
    );
  };
  return (
    <>
      <div className="body">
        <div className="body">
          <p>
            Vítáme Vás na stránce Zabal si, která slouží k plánování dovolené či
            jiné cesty.
          </p>
          <p>Na začátku si můžete vyplnit formulář o vaší cestě.</p>
          <Formular className="form" />
        </div>
        <button onClick={handleClick}>Vyplnit formulář</button>
      </div>
      <form
        className={openForm ? 'form' : 'form--closed'}
        onSubmit={handleSubmit}
      >
        <h1>Formulář</h1>
        <label>
          Země:
          <select onChange={(e) => setZeme(e.target.value)} value={zeme}>
            {' '}
            <VyberZeme />
          </select>
        </label>
        <label>
          Město:
          <input
            type="text"
            onChange={(e) => setMesto(e.target.value)}
            value={mesto}
          ></input>
        </label>
        <label>
          Odjezd:
          <input
            type="date"
            id="start"
            min="2021-05-27"
            max="2021-12-31"
            onChange={(e) => setOdjezd(e.target.value)}
          ></input>
        </label>
        <label>
          Příjezd:
          <input
            type="date"
            id="start"
            min="2021-05-27"
            max="2021-12-31"
            onChange={(e) => setPrijezd(e.target.value)}
          ></input>
        </label>

        <label>
          Počet zavazadel:
          <select
            onChange={(e) => setPocetZavazadel(e.target.value)}
            value={pocetZavazadel}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label>
          Kam jedu:
          <select onChange={(e) => setKamJedu(e.target.value)} value={kamJedu}>
            <option value="K moři">K moři</option>
            <option value="Na hory">Na hory</option>
            <option value="Na služební cesty">Na služební cestu</option>
            <option value="Na čundr">Na čundr</option>
          </select>
        </label>
        <div className="tlacitka">
          <button className="tlacitko1" type="reset">
            Zrušit
          </button>
          <button className="tlacitko2" type="submit">
            OK
          </button>
        </div>
      </form>
    </>
  );
};

export default Formular;
//Reset nefunguje u města, které vypisují sami
//Najít api knihovnu na výběr zemí
