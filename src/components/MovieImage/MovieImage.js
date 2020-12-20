import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import {CarouselButton} from '../CarouselButton/CarouselButton';

export function MovieImage({
                               image,
                               onDeleteClick,
                               onEditClick,
                               onMovieClick
                           }) {
    const imageClassName = {
        backgroundImage: `url(${image})`,
    }
    return (
        <div className='movie-card-image-container'>
            <div className='movie-card-img' style={imageClassName} onClick={onMovieClick}/>
            <div className='movie-card-actions-container'>
                <CarouselButton
                    onDeleteClick={onDeleteClick}
                    onEditClick={onEditClick}
                />
            </div>
        </div>
    )
}

MovieImage.propTypes = {
    image: PropTypes.string,
    onDeleteClick: PropTypes.func,
    onEditClick: PropTypes.func,
    onMovieClick: PropTypes.func
}