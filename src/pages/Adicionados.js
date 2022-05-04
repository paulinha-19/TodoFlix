import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import DefaultPoster from '../DefaultPoster';

const Adicionados = () => {
  const { addMovie } = useContext(MoviesContext);

  return (
    <div>
      <h3>Adicionados</h3>
      {
        addMovie.map((data) => {
          return (
            <div key={data.id}>
              <p>{data.title}</p>
              <img src={data.poster.base64} />
            </div>
          );
        })
      }
    </div>
  );
}

export default Adicionados