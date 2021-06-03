import React, { useEffect, useState } from 'react';
import { db } from '../db.js';
import firebase from 'firebase/app';
import './style.css';

const MDoklady = () => {
  const [polozky, setPolozky] = useState([]);

  useEffect(() => {
    const uklidPoSobe = db
      .collection('more-doklady')
      .orderBy('datumVytvoreni')
      .onSnapshot((snapshot) => {
        setPolozky(
          snapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });

    return uklidPoSobe;
  }, []);

  const [pridaniPolozky, setPridaniPolozky] = useState('');
  const [openList, setOpenList] = useState(false);
  const handleClick = () => {
    setOpenList(!openList);
  };

  return (
    <>
      <h1>Moře</h1>
      <div>
        <button onClick={handleClick}>Doklady</button>
        <div className={openList ? 'seznam' : 'seznam--closed'}>
          <ul>
            {polozky.map((polozka) => (
              <li key={polozka.id}>
                {polozka.nazev}
                <button
                  onClick={() =>
                    db.collection('more-doklady').doc(polozka.id).delete()
                  }
                >
                  Odstranit
                </button>
              </li>
            ))}
          </ul>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              db.collection('more-doklady').add({
                nazev: pridaniPolozky,
                datumVytvoreni: firebase.firestore.FieldValue.serverTimestamp(),
              });
              setPridaniPolozky('');
            }}
          >
            <label>
              Přidat položku:
              <input
                value={pridaniPolozky}
                onChange={(e) => setPridaniPolozky(e.target.value)}
              ></input>
            </label>
            <button>Přidat</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MDoklady;
