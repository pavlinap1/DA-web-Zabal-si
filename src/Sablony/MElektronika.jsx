import React, { useEffect, useState } from 'react';
import { db } from '../db.js';

const MElektronika = () => {
  const [polozky, setPolozky] = useState([]);

  useEffect(() => {
    const uklidPoSobe = db
      .collection('more-elektronika')
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

  return (
    <>
      <h3>Elektronika</h3>
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

export default MElektronika;
