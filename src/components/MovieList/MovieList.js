import React from 'react';
import './styles.css';
import {MovieCard} from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import {Label} from '../Label/Label';
import {MOVIES_FOUND} from './constants';

export function MovieList({isLoading, movies, onMovieDelete, onMovieEdit, onMovieClick}) {
    return (
        !isLoading
            ? <>
                <Label><b>{movies ? movies.length : 0}</b> {MOVIES_FOUND}</Label>
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
            : <Label><b>Please wait...</b></Label>
    )
}

MovieList.propTypes = {
    isLoading: PropTypes.bool,
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
    onMovieDelete: PropTypes.func,
    onMovieEdit: PropTypes.func,
    onMovieClick: PropTypes.func
}