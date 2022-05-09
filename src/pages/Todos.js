import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import '../assets/styles/Destaques.css';
import '../assets/styles/DefaultCard.css';
import Card from '../Card';
//css
import  '../assets/styles/Card.css';

const Todos = () => {
  const { allMovies} = useContext(MoviesContext);

  return (
    <div>
      <h3>Todos</h3>
      <div className="container-cards">
        {allMovies.map((data) => (
          <Card {...data} poster={data.poster} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Todos