import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';

const Adicionados = () => {
  const { addMovie } = useContext(MoviesContext);

  return (
    <div>
      Adicionados
      {
        addMovie.map((item) => {
          return (
            <p>{item.title}</p>
          );
        })
      }
    </div>
  )
}

export default Adicionados