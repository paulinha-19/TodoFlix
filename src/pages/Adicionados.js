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
              <DefaultPoster {...data} key={data.id} />
            </div>
          );
        })
      }
    </div>
  );
}

export default Adicionados