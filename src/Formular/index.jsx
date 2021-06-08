import React, { useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { seznam } from '../seznam';

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

const Formular = ({ onFormOK }) => {
  let history = useHistory();
  const [zeme, setZeme] = useState('');
  const [mesto, setMesto] = useState('');
  const [typDopravy, setTypDopravy] = useState('');
  const [prijezd, setPrijezd] = useState('');
  const [odjezd, setOdjezd] = useState('');
  const [pocetZavazadel, setPocetZavazadel] = useState(0);
  const [kamJedu, setKamJedu] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const handleClick = () => {
    setOpenForm(!openForm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataFromFrom = {
      zeme,
      mesto,
      typDopravy,
      pocetZavazadel,
      kamJedu,
      odjezd,
      prijezd,
    };

    onFormOK(dataFromFrom);
    history.push('/vizitka');
  };
  const handleResetClick = () => {
    setZeme('');
    setMesto('');
    setTypDopravy('');
    setPrijezd('');
    setOdjezd('');
    setPocetZavazadel('');
    setKamJedu('');
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
        </div>
        <button onClick={handleClick}>Vyplnit formulář</button>
      </div>
      <form
        className={openForm ? 'form' : 'form--closed'}
        onSubmit={handleSubmit}
      >
        <h1>Formulář</h1>
        <label>
          Cílová země:
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
          Účel cesty:
          <select onChange={(e) => setKamJedu(e.target.value)} value={kamJedu}>
            <option value="">Vyberte účel cesty</option>

            {seznam.map((polozka) => (
              <option key={polozka.name}> {polozka.name}</option>
            ))}
          </select>
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
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </label>
        <div className="tlacitka">
          <button onClick={handleResetClick} className="tlacitko1">
            Zrušit
          </button>
          <button
            className="tlacitko2"
            type="submit"
            disabled={
              zeme === '' ||
              pocetZavazadel === 0 ||
              kamJedu === '' ||
              odjezd === '' ||
              prijezd === ''
            }
          >
            OK
          </button>
        </div>
      </form>
    </>
  );
};

export default Formular;
