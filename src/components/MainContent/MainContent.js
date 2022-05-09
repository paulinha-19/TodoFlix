import React, { useContext, useState, useEffect } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import { dataAllMovies } from '../../dataAllMovies';
import IconLike from '../../assets/icon/icon-like.png';
import IconHeart from '../../assets/icon/icon-heart.png';
//css
import '../../assets/styles/MainContent.css';

const MainContent = () => {
    const results = dataAllMovies.movies;
    const [content, setContent] = useState(results);
    const { setVote } = useContext(MoviesContext);

    const newMovie = content.filter(movie => movie.watched === true);
    // setContent(newMovie);

    return (
        <>
            {newMovie.map(filteredWatched => (
                <div className="container-main-content" key={filteredWatched.id}>
                    <div className="image-main-content">
                        <img src={filteredWatched.poster} alt={filteredWatched.title} />
                    </div>
                    <div className="content-details">
                        <i className='icon-heart'>
                            <img src={IconHeart} alt='icon heart'></img>
                        </i>
                        <p className='recently-seen'>Visto recentemente</p>
                        <h2 className="title">{filteredWatched.title}</h2>
                        <p className="overview">{filteredWatched.overview}</p>
                        <div className='card-vote'>
                            <span className={`${setVote(filteredWatched.rating)} before-icon-like`}></span>
                            <i className='icon-like-destaques'>
                                <svg id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                    <rect id="Box" width="17" height="17" fill="none" />
                                    <path id="Path_1994" fill="#6cbe61" className={setVote(filteredWatched.rating)} data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" />
                                </svg>
                            </i>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}

export default MainContent