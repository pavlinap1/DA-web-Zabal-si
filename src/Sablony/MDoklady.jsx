import React, { useEffect, useState } from 'react';
import { db } from '../db.js';

const MDoklady = () => {
  const [polozky, setPolozky] = useState([]);

  useEffect(() => {
    const uklidPoSobe = db.collection('more-doklady').onSnapshot((snapshot) => {
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
      <h1>Moře</h1>
      <h3>Doklady</h3>
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

export default MDoklady;
