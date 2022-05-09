import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesContext';
import DefaultDetail from '../../DefaultDetail';
import { Modal } from 'react-bootstrap';
//img
import imgLoading from '../../assets/img/imgLoading.png';
import noSearch from '../../assets/icon/search-nothing-found.svg';
import IconLike from '../../assets/icon/icon-like.png';
import { FaHeart } from 'react-icons/fa';
import NoImg from '../../assets/img/noimg.png';
//css
import '../../assets/styles/SearchResults.css';
import '../../assets/styles/DefaultCard.css';

const SearchResults = () => {
    const { allMovies, handlerIcon, setVote } = useContext(MoviesContext);
    const [validator, setValidator] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const handleShow = () => setShowStatus(true);
    const handleClose = () => setShowStatus(false);

    const location = useLocation();
    const query = location.search;
    let word = query.substring(8);

    const getData = async () => {
        let response = allMovies.filter(movie => movie.title.toLowerCase().includes(word.toLowerCase()))
        if (response === 0) {
            setResults(false);
            setIsLoading(false);
        } else {
            setMovies(response);
            setIsLoading(false);
            setValidator(true);
            setResults(true);
        }
    };

    useEffect(() => {
        if (word.length <= 0) {
            setValidator(false);
            setIsLoading(false);
            setResults(false);
        } else {
            getData();
        }
    }, [word]);

    return (
        <div>
            <div className='container-search'>
                {isLoading && (
                    <div className="cargando">
                        <h3 className="loading"> Loading...</h3>
                        <img className="imgLoading" src={imgLoading} alt="Image Loading" />
                    </div>
                )}
                {movies.length > 0 ? (
                    movies.map((data) => {
                        return (
                            <>
                                <div key={data.id} className='container-card container-card-search'>
                                    <div className='card-img'>
                                        {data.poster ?
                                            <img alt={data.title} src={data.poster} onClick={handleShow} />
                                            :
                                            <img src={NoImg} alt={data.title} onClick={handleShow} />
                                        }
                                        <i onClick={handlerIcon}>
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
                                                <span className={`${setVote(data.rating)} before-icon-like`}></span>
                                                <i className='icon-like-destaques'>
                                                    <svg id="Icon_Thumbs_Up_Filled" data-name="Icon / Thumbs Up / Filled" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                                        <rect id="Box" width="17" height="17" fill="none" />
                                                        <path id="Path_1994" fill="#6cbe61" className={setVote(data.rating)} data-name="Path 1994" d="M97-8.286h2.805v-8.229H97Zm15.429-7.543a1.391,1.391,0,0,0-1.4-1.371H106.6l.666-3.134.021-.219a1.021,1.021,0,0,0-.309-.727l-.743-.72-4.615,4.519a1.326,1.326,0,0,0-.414.967v6.857a1.391,1.391,0,0,0,1.4,1.371h6.312a1.394,1.394,0,0,0,1.29-.837l2.118-4.834a1.328,1.328,0,0,0,.1-.5v-1.31l-.007-.007Z" transform="translate(-96.143 23.714)" />
                                                    </svg>
                                                </i>
                                            </div>
                                        </div>
                                        <p className='card-overview'>
                                            {data.overview}
                                        </p>
                                    </div>
                                    {/* <Modal show={showStatus} onHide={handleClose} backdrop="static" className="Modal" >
                                        <Modal.Header closeButton >
                                        </Modal.Header>
                                        <Modal.Body >
                                            <DefaultDetail id={data.id} poster={data.poster} overview={data.overview} title={data.title} watched={data.watched} rating={data.rating} />
                                        </Modal.Body>
                                    </Modal> */}
                                </div>
                            </>
                        );
                    })
                ) : (
                    <div className="noResults">
                        <h1 className="validator">
                            Não foram encontrados filmes que correspondam aos seus critérios de busca
                        </h1>
                        <img className="noMovieImg" src={noSearch} alt="Resultado não encontrado" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchResults