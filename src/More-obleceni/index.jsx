import React, { useState } from 'react';

export const Obleceni = () => {
  const [polozky, setPolozky] = useState([
    {
      nazev: 'Kraťasy',
    },
    {
      nazev: 'Tričko',
    },
  ]);
  return (
    <>
      <div>Seznam oblečení</div>
      <div>
        <ul>
          {polozky.map((polozky) => (
            <li>{polozky.nazev}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
