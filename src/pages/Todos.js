import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';

const Todos = () => {
  const {allMovies} = useContext(MoviesContext);
  return (
    <div>Todos</div>
  )
}

export default Todos