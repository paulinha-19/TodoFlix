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

    const newMovie = content.filter(movie => movie.watched === true);
    // setContent(newMovie);

    return (
        <>
            {console.log("MAINCONTENT", newMovie)}
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
                        <div className='box-vote-average'>
                            <span className='vote-average'>4/5</span>
                            <i className='icon-like'>
                                <img src={IconLike} alt="icon like"></img>
                            </i>
                        </div>
                    </div>
                </div>
            ))}

        </>
    );
}

export default MainContent