import React from 'react';
import {MovieSearch} from './MovieSearch';
import {MovieList} from './movieList/MovieList';
import PropTypes from 'prop-types';
import './styles.css';

export const MovieSearchContainer = props => {
    const {movieListSize, movies} = props
    return (
        <div className='movies-search-results'>
            <MovieSearch movieListSize={movieListSize}/>
            <MovieList movies={movies}/>
        </div>
    )
}

MovieSearchContainer.propTypes = {
    movieListSize: PropTypes.number.isRequired,
    movies: PropTypes.array.isRequired
}