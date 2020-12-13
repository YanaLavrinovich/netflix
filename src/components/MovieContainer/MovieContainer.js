import React from 'react';
import {MovieFilter} from '../MovieFilter/MovieFilter.js';
import {MovieList} from '../MovieList/MovieList.js';
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
                                   onMovieDelete
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
            <MovieList movies={movies} onMovieDelete={onMovieDelete}/>
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
    onMovieDelete: PropTypes.func
}