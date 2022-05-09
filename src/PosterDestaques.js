import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from './context/MoviesContext';
import { Modal } from "react-bootstrap";
import DefaultDetail from './DefaultDetail';
//icons
import { FaHeart } from "react-icons/fa";
import IconLike from './assets/icon/like.svg';
//img
import NoImg from './assets/img/noimg.png';
//css
import './assets/styles/SearchResults.css';
import './assets/styles/Destaques.css';

const DefaultPoster = ({ title, id, poster, overview, watched, rating }) => {
    const { favorites, setFavorites, getMovieStorage, getMovieDatail, isFavorite, setIsFavorite, handleRating, setVote } = useContext(MoviesContext);
    const [showStatus, setShowStatus] = useState(false);
    const handleShow = () => setShowStatus(true);
    const handleClose = () => setShowStatus(false);

    return (
        <div>
            <div className='container-card'>
                <div className='card-img'>
                    {poster ?
                        <img alt={title} src={poster} onClick={handleShow} />
                        :
                        <img src={NoImg} alt={title} onClick={handleShow} />
                    }
                    <i>
                        {isFavorite ?
                            <FaHeart className='heartIcon' style={{ color: 'red' }} /> : <FaHeart className='heartIcon' style={{ color: '#BABABA' }} />
                        }
                    </i>
                </div>
                <div className='box-content'>
                    <div className='box-title-vote'>
                        <h4 className='card-title'>
                            {title}
                        </h4>
                        <div className='box-vote-like'>
                            <span className={`${setVote(rating)} before-icon-like`}></span>
                            <i className='icon-like-destaques'>
                                <svg id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                    <rect id="Box" width="17" height="17" fill="none" />
                                    <path id="Path_1994" fill="#6cbe61" className={setVote(rating)} data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" />
                                </svg>
                            </i>
                        </div>
                    </div>
                    <p className='card-overview'>
                        {overview}
                    </p>
                </div>
            </div>
            <Modal show={showStatus} onHide={handleClose} backdrop="static" className="Modal" >
                <Modal.Header closeButton >
                </Modal.Header>
                <Modal.Body >
                    <DefaultDetail id={id} poster={poster} overview={overview} title={title} watched={watched} rating={rating} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DefaultPoster