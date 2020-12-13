import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export const MovieCardInfo = ({movie}) => {
    return (
        <div className='movie-card-info'>
            <div className='movie-card-info-row'>
                <h3 className='movie-card-info-name'>{movie.title}</h3>
                <p className='movie-card-info-year'>{movie.year}</p>
            </div>
            <p className='movie-card-info-description'>{movie.description}</p>
        </div>
    )
}

MovieCardInfo.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired
    }).isRequired
}