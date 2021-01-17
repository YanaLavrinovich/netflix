import React from 'react';
import {MovieFilter} from '../MovieFilter/MovieFilter';
import {MovieList} from '../MovieList/MovieList';
import './styles.css';
import PropTypes from 'prop-types';
import {Label} from '../Label/Label';
import {PLEASE_WAIT} from "./constants";

export const MovieContainer = ({
                                   isLoading,
                                   selectedGenre,
                                   movies,
                                   totalAmount,
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
                selectedGenre={selectedGenre}
                sortOptions={sortOptions}
                selectedSort={selectedSort}
                onGenreFilterChange={onGenreFilterChange}
                onSortChange={onSortChange}
            />
            {
                !isLoading
                    ? <MovieList
                        isLoading={isLoading}
                        movies={movies}
                        totalAmount={totalAmount}
                        onMovieDelete={onMovieDelete}
                        onMovieEdit={onMovieEdit}
                        onMovieClick={onMovieClick}
                    />
                    : <Label><b>{PLEASE_WAIT}</b></Label>
            }

        </div>
    )
}

MovieContainer.propTypes = {
    isLoading: PropTypes.bool,
    selectedGenre: PropTypes.string,
    movies: PropTypes.array,
    totalAmount: PropTypes.number,
    sortOptions: PropTypes.array,
    selectedSort: PropTypes.string,
    onSortChange: PropTypes.func,
    onGenreFilterChange: PropTypes.func,
    onMovieDelete: PropTypes.func,
    onMovieEdit: PropTypes.func,
    onMovieClick: PropTypes.func
}