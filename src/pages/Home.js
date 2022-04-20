import React, { useContext } from 'react';
import MainContent from '../components/MainContent/MainContent';
import Destaques from '../components/Destaques/Destaques';
import { MoviesContext } from '../context/MoviesContext';

const Home = () => {
  const { filterMovies } = useContext(MoviesContext);
  return (
    <div>
      <MainContent></MainContent>
      <Destaques></Destaques>
    </div>
  );
}

export default Home