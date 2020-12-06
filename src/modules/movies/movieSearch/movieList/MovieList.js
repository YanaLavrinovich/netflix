import React from 'react';
import './styles.css';
import {MovieCard} from './MovieCard.js';
import PropTypes from 'prop-types';

export const MovieList = props => {
    const {movies} = props
    return (
        <div className='movies-search-results-list'>
            {movies ? movies.map(movie => {
                return <MovieCard key={movie.id} movie={movie}/>
            }) : null}
        </div>

    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired
}