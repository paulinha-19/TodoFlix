import React, { useContext } from 'react';
import { MoviesContext } from './context/MoviesContext';
import { FaHeart } from 'react-icons/fa';

export default function Card({ poster, title, overview, rating }) {
    const { isFavorite, setVote } = useContext(MoviesContext);
    return (
        <div className="card">
            <div className="img-card">
                <img src={poster} alt={title} />
                <i>
                    {isFavorite ?
                        <FaHeart className='heart-icon' style={{ color: 'red' }} /> : <FaHeart className='heart-icon' style={{ color: '#BABABA' }} />
                    }
                </i>
            </div>
            <div className='title-vote-overview'>
                <div className='title-vote'>
                    <h4 className="card-title">
                        {title}
                    </h4>
                    <div className='card-vote'>
                        <span className={`${setVote(rating)} before-icon-like`}></span>
                        <i className='icon-like-destaques'>
                            <svg id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <rect id="Box" width="17" height="17" fill="none" />
                                <path id="Path_1994" fill="#6cbe61" className={setVote(rating)} data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" />
                            </svg>
                        </i>
                    </div>
                </div>
                <p className="card-overview">
                    {overview}
                </p>
            </div>
        </div>
    );
}
