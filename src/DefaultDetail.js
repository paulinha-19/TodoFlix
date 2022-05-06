import React from 'react';
import { FaHeart } from 'react-icons/fa';
import NoImg from './assets/img/noimg.png';
import IconEdit from './assets/icon/edit.png'
//css
import './assets/styles/ModalDetail.css';
import styled from 'styled-components';

const ButtonWatched = styled.button`
background-color: '#393939';
color: '#fff';
font-size: '0.8rempx';
width: '100px';
height: '25px';
font-weight: '600';
`

const DefaultDetail = ({ id, poster, overview, title, watched, dataMovie, setDataMovie, data }) => {
  const handleWatchedClick = (data) => {
    setDataMovie(
      dataMovie.map((item) =>
        item.id === data.id ? { ...item, watched: !item.watched } : item
      )
    );
  }
  return (
    <div className="movie_detail">
      <section>
        <img src={poster ? poster : NoImg} alt={title} />
      </section>
      <section className='watched-icon-edit'>
        <div className='button-watched'>
          <button style={{ marginTop: '1rem', backgroundColor: '#393939', color: '#fff', fontSize: '0.8rem', fontWeight: '400', width: '100px', height: '28px', borderRadius: '4px' }}>{watched === true ? 'JÁ ASSISTI' : 'NÃO ASSISTI'}</button>
        </div>
        <div className='heart-icon-modal' title='Favoritar'>
          <i>
            <FaHeart style={{ color: '#BABABA' }} />
          </i>
        </div>
        <div className='button-edit' title='Editar filme'>
          <i>
            <img src={IconEdit} alt='icon edit'/>
          </i>
        </div>
      </section>
      <section>
        <div className="movie_title">
          {title}
        </div>
        <div className="movie_overview">
          {overview}
        </div>
      </section>
    </div>
  );
}

export default DefaultDetail