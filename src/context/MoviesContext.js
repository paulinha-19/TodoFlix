import React, { useState, createContext, useEffect } from 'react';
//data
import { dataAllMovies } from '../dataAllMovies';

export const MoviesContext = createContext();

const MoviesContextProvider = props => {
    const results = dataAllMovies.movies;
    const [destaques, setDestaques] = useState(results);
    const [content, setContent] = useState({
        mainItem: {},
        main: [],
    });
    //destaques
    return (
        <MoviesContext.Provider value={{ destaques }}>
            {props.children}
        </MoviesContext.Provider>
    );
}

export default MoviesContextProvider