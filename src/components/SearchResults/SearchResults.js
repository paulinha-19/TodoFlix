import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesContext } from '../../context/MoviesContext';

const SearchResults = () => {
    const { allMovies } = useContext(MoviesContext);
    const [validator, setValidator] = useState(true);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [results, setResults] = useState(true);

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
        if (word.length <= 2) {
            setValidator(false);
            setIsLoading(false);
        } else {
            getData();
        }
    }, [word]);

    return (
        <div>SearchResults
        </div>
    );
}

export default SearchResults