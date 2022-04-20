import React, { useState, createContext, useEffect } from 'react';
//data
import { dataAllMovies } from '../dataAllMovies';

export const MoviesContext = createContext();

const MoviesContextProvider = props => {
    const results = dataAllMovies.movies;
    const [destaques, setDestaques] = useState(results);
    const [allMovies, setAllMovies] = useState(results);
    const [filterMovies, setFilterMovies] = useState([]);
    const [content, setContent] = useState({
        mainItem: {},
        main: [],
    });
    //destaques 


    //!searchInput ? pacientes: pacientes.filter(paciente => paciente.nome.toLowerCase().includes(searchInput.toLowerCase()))

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
        <MoviesContext.Provider value={{ allMovies, destaques, filterMovies, filteredMovies }}>
            {props.children}
        </MoviesContext.Provider>
    );
}

export default MoviesContextProvider