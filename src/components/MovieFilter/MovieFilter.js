import React from 'react';
import {GenreFilter} from '../GenreFilter/GenreFilter';
import {SortFilter} from '../SortFilter/SortFilter';
import PropTypes from 'prop-types';
import './styles.css';

export const MovieFilter = props => {
    const {genres, selectedGenre, sortOptions, selectedSort, onSortChange, onGenreFilterChange} = props
    return (
        <div className='movie-filter'>
            <GenreFilter genres={genres} selectedGenre={selectedGenre} onGenreFilterChange={onGenreFilterChange}/>
            <SortFilter sortOptions={sortOptions} selectedSort={selectedSort} onSortChange={onSortChange}/>
        </div>
    )
}

MovieFilter.propTypes = {
    genres: PropTypes.array,
    sortOptions: PropTypes.array,
    selectedGenre: PropTypes.string,
    selectedSort: PropTypes.string,
    onSortChange: PropTypes.func,
    onGenreFilterChange: PropTypes.func
}