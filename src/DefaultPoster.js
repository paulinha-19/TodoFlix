import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from './context/MoviesContext';
import { Modal } from "react-bootstrap";
//icons
import { FaRegHeart } from "react-icons/fa";
import { useQuery } from 'react-query';
//img
import NoImg from './assets/img/noimgpng';
//css
import './styles/SearchResults.css';
import './styles/Destaques.css';

const DefaultPoster = () => {
    const { favoriteList, setFavoriteList, getMovieStorage, getMovieDatail, isFavorite, setIsFavorite, handlerIcon } = useContext(MoviesContext);
    const [showStatus, setShowStatus] = useState(false);
    const handleShow = () => setShowStatus(true);
    const handleClose = () => setShowStatus(false);
    return (
        <div>
            <div className='container-card'>
                <div className='card-img'>
                    <img alt={data.title} src={data.poster ? data.poster : NoImg} />
                    <i onClick={handlerIcon}>
                        {isFavorite ?
                            <FaHeart className='heartIcon' style={{ color: 'red' }} /> : <FaHeart className='heartIcon' style={{ color: '#BABABA' }} />
                        }
                    </i>
                </div>
                <div className='box-content'>
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

            <Modal show={showStatus} onHide={handleClose} backdrop="static" className="Modal" >
                <Modal.Header closeButton >
                </Modal.Header>
                <Modal.Body >
                    <MovieDetail genre={genreList} id={id} poster_path={poster_path} overview={overview} vote_average={vote_average} vote_count={vote_count} title={title} release_date={release_date} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DefaultPoster