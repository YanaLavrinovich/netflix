import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import {CarouselButton} from "../CarouselButton/CarouselButton";

export function MovieImage({image, showActions, onDotsClick, onDeleteClick, onEditClick}) {
    return (
        <div className='movie-card-image-container'>
            <img className='movie-card-img' src={image} alt='MovieLogo'/>
            <div className='movie-card-actions-container'>
                <CarouselButton showActions={showActions} onDotsClick={onDotsClick} onDeleteClick={onDeleteClick}
                                onEditClick={onEditClick}/>
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