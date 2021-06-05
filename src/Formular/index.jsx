import React, { useState } from 'react';
import './style.css';

const VyberZeme = ({ zeme }) => {
  return (
    <>
      <option value="">Vyberte si zemi</option>
      <option value="Česká republika">Česká republika</option>
      <option value="Slovensko">Slovensko</option>
      <option value="Chorvatsko">Chorvatsko</option>
      <option value="Itálie">Itálie</option>
      <option value="Francie">Francie</option>
      <option value="Spanelsko">Španělsko</option>
      <option value="Polsko">Polsko</option>
      <option value="Nemecko">Německo</option>
      <option value="Rakousko">Rakousko</option>
      <option value="Norsko">Norsko</option>
    </>
  );
};

const Formular = () => {
  const [zeme, setZeme] = useState('');
  const [mesto, setMesto] = useState('');
  const [prijezd, setPrijezd] = useState('');
  const [odjezd, setOdjezd] = useState('');
  const [pocetZavazadel, setPocetZavazadel] = useState('0');
  const [kamJedu, setKamJedu] = useState('');
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
  const handleResetClick = () => {
    setZeme('');
    setMesto('');
    setPrijezd('');
    setOdjezd('');
    setPocetZavazadel('');
    setKamJedu('');
  };
  return (
    <>
      <div className="body">
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
            <option value="">Vyberte účel cesty</option>
            <option value="K moři">K moři</option>
            <option value="Na hory">Na hory</option>
            <option value="Na služební cesty">Na služební cestu</option>
            <option value="Na čundr">Na čundr</option>
          </select>
        </label>
        <div className="tlacitka">
          <button onClick={handleResetClick} className="tlacitko1">
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
