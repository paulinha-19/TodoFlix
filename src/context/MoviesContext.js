import React, { useState, createContext, useEffect } from 'react';
// import { v4 as uuid } from 'uuid';

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
        <MoviesContext.Provider value={{ allMovies, destaques, filterMovies, filteredMovies, isFavorite, setIsFavorite, favorites, setFavorites }}>
            {props.children}
        </MoviesContext.Provider>
    );
}

export default MoviesContextProvider