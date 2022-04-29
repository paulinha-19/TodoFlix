import React from 'react';
import NoImg from './assets/img/noimg.png'
//css
import './assets/styles/ModalDetail.css';

const DefaultDetail = ({ id, poster, overview, title }) => {
  return (
    <div className="movie_detail">
      <section>
        <img src={poster ? poster : NoImg} alt={title} />
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