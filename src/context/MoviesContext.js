import React, { useState, createContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

//data
import { dataAllMovies } from '../dataAllMovies';

export const MoviesContext = createContext();

const MoviesContextProvider = props => {
    const results = dataAllMovies.movies;
    const [destaques, setDestaques] = useState(results);
    const [allMovies, setAllMovies] = useState(results);
    const [filterMovies, setFilterMovies] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [favoriteList, setFavoriteList] = useState([]);
    const [content, setContent] = useState({
        mainItem: {},
        main: [],
    });
    //favoritos 1
    const addFavoriteMovie = movie => {
        setFavoriteList([...favoriteList, movie]);
    };
    const removeFavoriteMovie = movie => {
        const filteredList = favoriteList.filter(
            item => item.id !== movie.id
        );
        setFavoriteList(filteredList);
    };
    const favoriteIsExist = movie => {
        if (favoriteList.filter(item => item.id === movie.id).length > 0) {
            return true;
        }
        return false;
    };
    const handleFavClick = (event) => {
        setIsFavorite(prevValue => {
            return !prevValue
        });
        console.log(isFavorite);
    }

    //favoritos 2
    const getMovieStorage = () => {
        if (localStorage.getItem("favorites")) {
            let favoriteList = JSON.parse(localStorage.getItem("favorites"));
            return favoriteList
        }
        else {
            let favoriteList = []
            return favoriteList
        }
    }

    //favorites
    useEffect(() => {
        if (favoriteList.includes(allMovies.id)) {
            setIsFavorite(!isFavorite);
            const favorite = getMovieStorage();
            setFavoriteList(favorite);
        }
    }, []);
    const handlerIcon = (e) => {
        setIsFavorite(!isFavorite);
        if (isFavorite) {
            var index = favoriteList.indexOf(allMovies.id);
            favoriteList.splice(index, 1);
            setFavoriteList(favoriteList);
            deleteMovie(allMovies.id);
        }
        else {
            setFavoriteList(favoriteList.concat([allMovies.id]));
            addMovie(allMovies.id);
        }
    }
    const deleteMovie = (id) => {
        const Favorite = getMovieStorage();
        var index = Favorite.indexOf(id)
        Favorite.splice(index, 1);
        localStorage.setItem("FavoritList", JSON.stringify(Favorite));
    }
    const addMovie = (id) => {
        const Favorite = getMovieStorage();
        Favorite.push(id)
        localStorage.setItem("FavoritList", JSON.stringify(Favorite))
    }



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

    return (
        <MoviesContext.Provider value={{ allMovies, destaques, filterMovies, filteredMovies, isFavorite, setIsFavorite, addFavoriteMovie, removeFavoriteMovie, handleFavClick, handlerIcon, favoriteList, getMovieStorage }}>
            {props.children}
        </MoviesContext.Provider>
    );
}

export default MoviesContextProvider