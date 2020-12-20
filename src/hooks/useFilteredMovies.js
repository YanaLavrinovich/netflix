import {genres} from '../layouts/MovieListPage/MovieConstants';
import {sortByField} from '../layouts/MovieListPage/MovieListUtil';
import {useEffect, useState} from 'react';

export function useFilteredMovies({movies, selectedGenre, selectedSort}) {
    const [filteredMovies, setFilteredMovies] = useState([])

    useEffect(() => {
        const filterType = genres.find(filter => filter.id === selectedGenre)?.name
        let newFilteredMovies = [...movies]
        if (filterType !== 'ALL') {
            newFilteredMovies = newFilteredMovies.filter(movie => movie.genre === filterType)
        }
        setFilteredMovies(sortByField(newFilteredMovies, selectedSort))
    }, [movies, selectedGenre, selectedSort])

    return filteredMovies
}
