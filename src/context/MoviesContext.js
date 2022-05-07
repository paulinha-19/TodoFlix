import React, { useState, createContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

//data
import { dataAllMovies } from '../dataAllMovies';
export const MoviesContext = createContext();
const MoviesContextProvider = props => {
    const results = dataAllMovies.movies;
    const [destaques] = useState(results);
    const [allMovies] = useState(results);
    const [filterMovies, setFilterMovies] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [rating, setRating] = useState(0);
    const [addMovie, setAddMovie] = useLocalStorage("addMovies", []);

    //modal
    const [showStatus, setShowStatus] = useState(false);
    const handleShow = () => setShowStatus(true);
    const handleClose = () => setShowStatus(false);

    const filteredMovies = (event) => {
        const filterResult = allMovies.filter((movie) => {
            if (movie.title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true;
            }
        });
        setFilterMovies({
            filterMovies: filterResult
        });
    }

    //rating
    const handleRating = (rate) => {
        setRating(rate);
        return rate;
    }

    //Punctuation/Note
    const setVote = (note) => {
        if (note === 0) { // 0 star
            return "rating-like-white";
        } else if (note === 20) {  //1
            return "rating-like-red20";
        } else if (note === 40) {  //2
            return "rating-like-red40";
        } else if (note === 60) { //3 stars
            return "rating-like-orange";
        } else if (note === 80) { //4 stars
            return "rating-like-green80"
        } else return "rating-like-green100";  //5 stars
    };


    //favorites
    // useEffect(() => {
    //     if (favorites.includes(id)) {
    //         setIsFavorite(!isFavorite);
    //     }
    // }, []);
    // const handlerIcon = (e) => {
    //     setIsFavorite(!isFavorite);
    //     if (isFavorite) {
    //         var index = favorites.indexOf(id);
    //         favorites.splice(index, 1);
    //         setFavorites(favorites);
    //         deleteMovieOrSerie(id);
    //     }
    //     else {
    //         setFavorites(favorites.concat([id]));
    //         addMovieOrSerie(id);
    //     }
    // }
    // const deleteMovieOrSerie = (id) => {
    //     const FavoriList = getMovieStorage();
    //     var index = FavoriList.indexOf(id)
    //     FavoriList.splice(index, 1);
    //     localStorage.setItem("myFavoriList", JSON.stringify(FavoriList));
    // }
    // const addMovieOrSerie = (id) => {
    //     const FavoriList = getMovieStorage();
    //     FavoriList.push(id)
    //     localStorage.setItem("myFavoriList", JSON.stringify(FavoriList))
    // }

    return (
        <MoviesContext.Provider value={{ allMovies, destaques, filterMovies, filteredMovies, isFavorite, setIsFavorite, favorites, setFavorites, showStatus, handleClose, handleShow, rating, setRating, addMovie, setAddMovie, setVote, handleRating }}>
            {props.children}
        </MoviesContext.Provider>
    );
}

export default MoviesContextProvider