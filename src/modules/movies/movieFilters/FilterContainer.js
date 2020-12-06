import React from 'react';
import {GenreFiltersContainer} from './genreFilters/GenreFiltersContainer';
import {MovieSort} from './movieSort/MovieSort';
import PropTypes from 'prop-types';
import './styles.css';

export const FilterContainer = props => {
    const {genres, sortOptions} = props
    return (
        <div className='filters-container'>
            <GenreFiltersContainer genres={genres}/>
            <MovieSort sortOptions={sortOptions}/>
        </div>
    )
}

FilterContainer.propTypes = {
    genres: PropTypes.array.isRequired,
    sortOptions: PropTypes.array.isRequired
}