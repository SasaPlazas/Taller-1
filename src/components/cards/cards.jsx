import React, { useState } from 'react';
import './cards.css';
import ConciertosData from '/data';

const Cards = () => {
  const [misConciertos, setMisConciertos] = useState([]);

  const handleClick = (concierto) => {
    // Evitar duplicados
    if (!misConciertos.some(c => c.nombre === concierto.nombre)) {
      setMisConciertos((prev) => [...prev, concierto]);
    }
  };

  return (
    <div>
      <h2>Conciertos Disponibles</h2>
      <div className='cards-container'>
        {ConciertosData.map((concierto, index) => (
          <div className='card' key={index}> 
            <h1>{concierto.nombre}</h1>
            <h3>{concierto.fecha}</h3>
            <button 
              className='añadir' 
              onClick={() => handleClick(concierto)}
            >
              Añadir a Mis Conciertos
            </button>
          </div>
        ))}
      </div>

      {misConciertos.length > 0 && (
        <>
          <h2>Mis Conciertos</h2>
          <div className='cards-container'>
            {misConciertos.map((concierto, index) => (
              <div className='card' key={index}>
                <h1>{concierto.nombre}</h1>
                <h3>{concierto.fecha}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
