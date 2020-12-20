import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {MovieImage} from '../MovieImage/MovieImage';
import {MovieCardInfo} from '../MovieCardInfo/MovieCardInfo';

export function MovieCard({movie, onMovieDelete, onMovieEdit, onMovieClick}) {
    return (
        <div className='movie-card'>
            <MovieImage
                image={movie.movieUrl}
                onDeleteClick={() => onMovieDelete(movie.id)}
                onEditClick={() => onMovieEdit(movie.id)}
                onMovieClick={() => onMovieClick(movie.id)}
            />
            <MovieCardInfo movie={movie}/>
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        movieUrl: PropTypes.string,
        year: PropTypes.string.isRequired
    }).isRequired,
    onMovieDelete: PropTypes.func,
    onMovieEdit: PropTypes.func,
    onMovieClick: PropTypes.func
}