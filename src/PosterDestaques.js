import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from './context/MoviesContext';
import { Modal } from "react-bootstrap";
import DefaultDetail from './DefaultDetail';
//icons
import { FaHeart } from "react-icons/fa";
import IconLike from './assets/icon/icon-like.png'
//img
import NoImg from './assets/img/noimg.png';
//css
import './assets/styles/SearchResults.css';
import './assets/styles/Destaques.css';

const DefaultPoster = ({ title, id, poster, overview, watched}) => {
    const { favorites, setFavorites, getMovieStorage, getMovieDatail, isFavorite, setIsFavorite } = useContext(MoviesContext);
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
                        <img src={NoImg} alt={title} />
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
                            <span className='card-vote-average'>4/5</span>
                            <i className='icon-like-destaques'>
                                <img src={IconLike} alt="icon like"></img>
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
                    <DefaultDetail id={id} poster={poster} overview={overview} title={title} watched={watched} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DefaultPoster