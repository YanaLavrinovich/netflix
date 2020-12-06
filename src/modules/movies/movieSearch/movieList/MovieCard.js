import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = props => {
    const {movie} = props
    return (
        <div className='movie-card'>
            <img className='movie-card-img' src={movie.image} alt='MovieLogo'/>
            <div className='movie-card-info'>
                <div className='movie-card-info-row'>
                    <h3 className='movie-card-info-name'>{movie.title}</h3>
                    <p className='movie-card-info-year'>{movie.year}</p>
                </div>
                <p className='movie-card-info-description'>{movie.description}</p>
            </div>
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired
    }).isRequired
}