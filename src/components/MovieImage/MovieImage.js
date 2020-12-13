import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export function MovieImage({image, showActions, onDotsClick, onDeleteClick, onEditClick}) {
    return (
        <div className='movie-card-image-container'>
            <img className='movie-card-img' src={image} alt='MovieLogo'/>
            <div className='movie-card-actions-container'>
                {!showActions ?
                    <button className='movie-card-actions-open' onClick={onDotsClick}>...</button>
                    : <div className='movie-card-actions'>
                        <button type="button" className='movie-card-actions-close' onClick={onDotsClick}>
                            <span>×</span>
                        </button>
                        <button className='movie-card-action' onClick={onEditClick}>Edit</button>
                        <button className='movie-card-action' onClick={onDeleteClick}>Delete</button>
                    </div>
                }
            </div>
        </div>
    )

}

MovieImage.propTypes = {
    showActions: PropTypes.bool,
    image: PropTypes.string,
    onDeleteClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onDotsClick: PropTypes.func
}