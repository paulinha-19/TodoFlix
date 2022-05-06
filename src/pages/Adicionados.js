import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import DefaultPoster from '../DefaultPoster';

const Adicionados = () => {
  const { addMovie, setAddMovie} = useContext(MoviesContext);
  return (
    <>
      <div>
        <h3>Adicionados</h3>
      </div>
      {
        addMovie.map((data) => {
          return (
            <div key={data.id}>
              <DefaultPoster {...data} poster={data.poster.base64} data={data} key={data.id} dataMovie={addMovie} setDataMovie={setAddMovie} />
            </div>
          );
        })
      }
    </>
  );
}

export default Adicionados