import React from 'react';
import './styles.css';
import {MovieCard} from '../MovieCard/MovieCard.js';
import PropTypes from 'prop-types';
import {Label} from '../Label/Label';

export const MovieList = props => {
    const {movies, onMovieDelete, onMovieEdit} = props
    return (
        <>
            <Label><b>{movies ? movies.length : 0}</b> movies found</Label>
            <div className='movie-list'>
                {movies && movies.map(movie => {
                    return <MovieCard key={movie.id} movie={movie} onMovieDelete={onMovieDelete}
                                      onMovieEdit={onMovieEdit}/>
                })}
            </div>
        </>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
    onMovieDelete: PropTypes.func,
    onMovieEdit: PropTypes.func
}