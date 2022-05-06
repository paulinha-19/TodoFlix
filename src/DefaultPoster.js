import React, { useContext, useState } from 'react';
import { MoviesContext } from './context/MoviesContext';
import DefaultDetail from './DefaultDetail';
//icon
import IconLike from './assets/icon/like.svg';
import { FaHeart } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import './assets/styles/DefaultPoster.css';

const DefaultPoster = ({ title, id, poster, overview, rating, dataMovie, setDataMovie, data, watched }) => {
    const { isFavorite, setVote } = useContext(MoviesContext);
    const [showStatus, setShowStatus] = useState(false);
    const handleShow = () => setShowStatus(true);
    const handleClose = () => setShowStatus(false);

    return (
        <div className='container-poster'>
            <div className='poster'>
                <div className='poster-img'>
                    <img src={poster} onClick={handleShow} />
                    <i>
                        {isFavorite ?
                            <FaHeart className='heart-icon' style={{ color: 'red' }} /> : <FaHeart className='heart-icon' style={{ color: '#BABABA' }} />
                        }
                    </i>
                </div>
                <div className='poster-title-vote'>
                    <h4 className='title-movie'>
                        {title}
                    </h4>
                    <div className='box-note'>
                        <span className={setVote(rating)}></span>
                        <i className='icon-vote-like'>
                            <svg id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <rect id="Box" width="17" height="17" fill="none" />
                                <path id="Path_1994" fill="#6cbe61" className={setVote(rating)} data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" />
                            </svg>
                        </i>
                    </div>
                </div>
                <div className='overview'>
                    <p>
                        {overview}
                    </p>
                </div>
                <p>{watched.toString()}</p>
            </div>
            <Modal show={showStatus} onHide={handleClose} backdrop="static" className="Modal" >
                <Modal.Header closeButton >
                </Modal.Header>
                <Modal.Body >
                    <DefaultDetail id={id} poster={poster} overview={overview} title={title} dataMovie={dataMovie} setDataMovie={setDataMovie} data={data} watched={watched}/>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DefaultPoster