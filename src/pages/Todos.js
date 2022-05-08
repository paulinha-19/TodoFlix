import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
//icon
import IconHeart from '../assets/icon/icon-heart.png';
import IconLike from '../assets/icon/icon-like.png';
import '../assets/styles/Destaques.css';
import '../assets/styles/DefaultCard.css';
import { FaHeart } from 'react-icons/fa';
import Card from '../Card';
//css
import  '../assets/styles/Card.css';

const Todos = () => {
  const { allMovies} = useContext(MoviesContext);

  return (
    <div>
      <h3>Adicionados</h3>
      <div className="container-cards">
        {allMovies.map((data) => (
          <Card {...data} poster={data.poster} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Todos