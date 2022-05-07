import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import Card from '../Card';
import '../assets/styles/DefaultPoster.css';

const Adicionados = () => {
  const { addMovie, setAddMovie } = useContext(MoviesContext);
  return (
    <div>
      <h3>Adicionados</h3>
      <div className="container-cards">
        {addMovie.map((data) => (
          <Card {...data} poster={data.poster.base64} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Adicionados