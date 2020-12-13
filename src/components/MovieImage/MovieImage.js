import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export function MovieImage({image, onButtonClick}) {
    return (
        <div className='image-container'>
            <img className='movie-card-img' src={image} alt='MovieLogo'/>
            <button className='image-button' onClick={() => onButtonClick('delete')}>...</button>
        </div>
    )
}

MovieImage.propTypes = {
    image: PropTypes.string,
    onButtonClick: PropTypes.func
}