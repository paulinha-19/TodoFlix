import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import Card from '../Card';
import '../assets/styles/Card.css';

const Adicionados = () => {
  const { addMovie } = useContext(MoviesContext);
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