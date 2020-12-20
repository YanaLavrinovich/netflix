import React from 'react';
import './styles.css';
import {MovieCard} from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import {Label} from '../Label/Label';

export function MovieList({movies, onMovieDelete, onMovieEdit, onMovieClick}) {
    return (
        <>
            <Label><b>{movies ? movies.length : 0}</b> movies found</Label>
            <div className='movie-list'>
                {
                    movies?.map(movie => {
                        return <MovieCard
                            key={movie.id}
                            movie={movie}
                            onMovieDelete={onMovieDelete}
                            onMovieEdit={onMovieEdit}
                            onMovieClick={onMovieClick}
                        />
                    })
                }
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
    onMovieEdit: PropTypes.func,
    onMovieClick: PropTypes.func
}