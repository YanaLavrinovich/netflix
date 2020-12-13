import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {MovieImage} from '../MovieImage/MovieImage';
import {MovieCardInfo} from '../MovieCardInfo/MovieCardInfo';

export const MovieCard = props => {
    const {movie, onMovieDelete} = props
    return (
        <div className='movie-card'>
            <MovieImage image={movie.image} onButtonClick={onMovieDelete}/>
            <MovieCardInfo movie={movie}/>
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired
    }).isRequired,
    onMovieDelete: PropTypes.func
}