import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesContext';
//img
import imgLoading from '../../assets/img/imgLoading.png';
import noResult from '../../assets/img/noResult.png';
import IconHeart from '../../assets/icon/icon-heart.png';
import IconLike from '../../assets/icon/icon-like.png';

//css
import '../../styles/Destaques.css';
import '../../styles/SearchResults.css';

const SearchResults = () => {
    const { allMovies } = useContext(MoviesContext);
    const [validator, setValidator] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);


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
        } else {
            getData();
        }
    }, [word]);

    return (
        <div className='container-search'>
            {/* Resultado para {word} */}
            {isLoading && (
                <div className="cargando">
                    <h3 className="loading"> Loading...</h3>
                    <img className="imgLoading" src={imgLoading} alt="Image Loading" />
                </div>
            )}
            {results ? (
                movies.map((data, index) => {
                    return (
                        <div key={index} className='container-card container-card-search'>
                            <div className='card-img'>
                                <img alt={data.title} src={data.poster} />
                                <i style={isFavorite ? { color: "#ff0000" } : { color: "#000" }}
                                    className={isFavorite ? 'heart-icon-search heartIcon' : 'hidden heart-icon-search heartIcon'}
                                >
                                    <img src={IconHeart} alt={data.title} />
                                </i>
                            </div>
                            <div className='box-content box-content-search'>
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
                    );
                })
            ) : (
                <div className="noResults">
                    <h1 className="validator">
                        Não foram encontrados filmes que correspondam aos seus critérios de busca
                    </h1>
                    <img className="noMovieImg" src={noResult} alt="Resultado não encontrado" />
                </div>
            )}
        </div >
    );
}

export default SearchResults