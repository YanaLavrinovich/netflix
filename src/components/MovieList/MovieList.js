import React from 'react';
import './styles.css';
import {MovieCard} from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import {Label} from '../Label/Label';
import {MOVIES_FOUND, NO_MOVIE_FOUND} from './constants';

export function MovieList({movies, totalAmount, onMovieDelete, onMovieEdit, onMovieClick}) {
    return (
        totalAmount > 0
            ? <>
                <Label><b>{totalAmount}</b> {MOVIES_FOUND}</Label>
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
            : <div className='no-movies-container'>
                <p className='no-movies-label'>{NO_MOVIE_FOUND}</p>
            </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
    totalAmount: PropTypes.number,
    onMovieDelete: PropTypes.func,
    onMovieEdit: PropTypes.func,
    onMovieClick: PropTypes.func
}