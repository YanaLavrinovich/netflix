import React from 'react';
import PropTypes from 'prop-types';

export const GenreFilters = props => {
    return (
        <button className='filter-btn btn'>{props.genre.name}</button>
    )
}

GenreFilters.propTypes = {
    genre: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
}