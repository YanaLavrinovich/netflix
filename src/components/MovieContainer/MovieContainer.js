import React from 'react';
import {MovieFilter} from '../MovieFilter/MovieFilter';
import {MovieList} from '../MovieList/MovieList';
import './styles.css';
import PropTypes from 'prop-types';

export const MovieContainer = ({
                                   genres,
                                   selectedGenre,
                                   movies,
                                   sortOptions,
                                   selectedSort,
                                   onSortChange,
                                   onGenreFilterChange,
                                   onMovieDelete,
                                   onMovieEdit,
                                   onMovieClick
                               }) => {
    return (
        <div className='movie-container'>
            <MovieFilter
                genres={genres}
                selectedGenre={selectedGenre}
                sortOptions={sortOptions}
                selectedSort={selectedSort}
                onGenreFilterChange={onGenreFilterChange}
                onSortChange={onSortChange}
            />
            <MovieList
                movies={movies}
                onMovieDelete={onMovieDelete}
                onMovieEdit={onMovieEdit}
                onMovieClick={onMovieClick}
            />
        </div>
    )
}

MovieContainer.propTypes = {
    genres: PropTypes.array,
    selectedGenre: PropTypes.string,
    movies: PropTypes.array,
    sortOptions: PropTypes.array,
    selectedSort: PropTypes.string,
    onSortChange: PropTypes.func,
    onGenreFilterChange: PropTypes.func,
    onMovieDelete: PropTypes.func,
    onMovieEdit: PropTypes.func,
    onMovieClick: PropTypes.func
}