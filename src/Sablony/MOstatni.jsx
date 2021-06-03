import React, { useEffect, useState } from 'react';
import { db } from '../db.js';

const MOstatni = () => {
  const [polozky, setPolozky] = useState([]);

  useEffect(() => {
    const uklidPoSobe = db.collection('more-ostatni').onSnapshot((snapshot) => {
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

  return (
    <>
      <h3>Ostatní</h3>
      <div>
        <ul>
          {polozky.map((polozka) => (
            <li key={polozka.nazev}>{polozka.nazev}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MOstatni;
