import React from 'react'
import { useState } from 'react';
import './cards.css';
import ConciertosData from '/data';

const Cards = () => {
    const [conciertos, setConciertos] = useState([]);   

     const handleClick = () => {
        setConciertos((prevConciertos) => [
            ...prevConciertos,
            { 
                id: prevConciertos.length + 1, 
                nombre: `Concierto ${prevConciertos.length + 1}`,
                fecha: "Fecha por definir"
            },
        ]);
    };

  return (
    <div>
          <h2>Conciertos</h2>
              <div className='cards-container'>
                  {ConciertosData.map((concierto) => (
                      <div className='card'> 
                          <h1>{concierto.nombre}</h1>
                          <h3>{concierto.fecha}</h3>
                           <button className='añadir' onClick={handleClick}>Añadir Concierto {conciertos.length}</button>
                      </div>
                  ))}
              
              </div>
    </div>
  )
}

export default Cards
