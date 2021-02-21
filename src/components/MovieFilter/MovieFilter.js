import React from 'react';
import {GenreFilter} from '../GenreFilter/GenreFilter';
import {SortFilter} from '../SortFilter/SortFilter';
import PropTypes from 'prop-types';
import './styles.css';

export const MovieFilter = props => {
    const {selectedGenre, sortOptions, selectedSort, onSortChange, onGenreFilterChange} = props
    return (
        <div className='movie-filter'>
            <GenreFilter
                selectedGenre={selectedGenre}
                onGenreFilterChange={onGenreFilterChange}
            />
            <SortFilter
                sortOptions={sortOptions}
                selectedSort={selectedSort}
                onSortChange={onSortChange}
            />
        </div>
    )
}

MovieFilter.propTypes = {
    sortOptions: PropTypes.array,
    selectedGenre: PropTypes.string,
    selectedSort: PropTypes.string,
    onSortChange: PropTypes.func.isRequired,
    onGenreFilterChange: PropTypes.func.isRequired
}

MovieFilter.defaultProps = {
    sortOptions: [],
    selectedGenre: '',
    selectedSort: ''
}