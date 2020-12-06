import React from 'react';
import PropTypes from 'prop-types';

export const MovieSearch = props => {
    const {movieListSize} = props
    return (
        <div className='movies-search-results-count'>
            <p><b>{movieListSize}</b> movies found</p>
        </div>
    )
}

MovieSearch.propTypes = {
    movieListSize: PropTypes.number.isRequired
}