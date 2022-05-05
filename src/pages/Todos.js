import React, { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
//icon
import IconHeart from '../assets/icon/icon-heart.png';
import IconLike from '../assets/icon/icon-like.png';
import '../assets/styles/Destaques.css';
import '../assets/styles/DefaultCard.css';
import { FaHeart } from 'react-icons/fa';
import DefaultPoster from '../PosterDestaques';

const Todos = () => {
  const { allMovies, isFavorite, handlerIcon } = useContext(MoviesContext);
  return (
    <div className='container-search'>
      {
        allMovies.map((data) => {
          return (
            <div key={data.id} className='container-card container-card-search'>
              <div className='card-img'>
                <img alt={data.title} src={data.poster} />
                <i>
                  {isFavorite ?
                    <FaHeart className='heartIcon heartIconDefault' style={{ color: 'red' }} /> : <FaHeart className='heartIcon heartIconDefault' style={{ color: '#BABABA' }} />
                  }
                </i>
              </div>
              <div className='box-content box-content-search'>
                <div className='box-title-vote'>
                  <h4 className='card-title'>
                    {data.title}
                  </h4>
                  <div className='box-vote-like'>
                    <span className='card-vote-average'>4/5</span>
                    <i className='icon-like-destaques'>
                      <img src={IconLike} alt="icon like"></img>
                    </i>
                  </div>
                </div>
                <p className='card-overview'>
                  {data.overview}
                </p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Todos