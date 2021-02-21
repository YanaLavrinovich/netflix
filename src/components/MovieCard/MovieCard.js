import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {MovieImage} from '../MovieImage/MovieImage';
import {MovieCardInfo} from '../MovieCardInfo/MovieCardInfo';

export function MovieCard({movie, onMovieDelete, onMovieEdit, onMovieClick}) {
    const {id} = movie

    const handleDeleteClick = useCallback(() => {
        onMovieDelete(id)
    }, [id, onMovieDelete])

    const handleEditClick = useCallback(() => {
        onMovieEdit(id)
    }, [id, onMovieEdit])

    const handleMovieClick = useCallback(() => {
        onMovieClick(id)
    }, [id, onMovieClick])

    return (
        <div className='movie-card'>
            <MovieImage
                image={movie.poster_path}
                onDeleteClick={handleDeleteClick}
                onEditClick={handleEditClick}
                onMovieClick={handleMovieClick}
            />
            <MovieCardInfo movie={movie}/>
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        tagline: PropTypes.string,
        poster_path: PropTypes.string,
        release_date: PropTypes.string.isRequired
    }).isRequired,
    onMovieDelete: PropTypes.func.isRequired,
    onMovieEdit: PropTypes.func.isRequired,
    onMovieClick: PropTypes.func.isRequired
}