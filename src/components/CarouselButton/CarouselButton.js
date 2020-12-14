import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export function CarouselButton({showActions, onDotsClick, onEditClick, onDeleteClick}) {
    return (
        !showActions ?
            <button className='carousel-button-actions-open' onClick={onDotsClick}>...</button>
            : <div className='carousel-button-actions'>
                <button type="button" className='carousel-button-actions-close' onClick={onDotsClick}>
                    <span>×</span>
                </button>
                <button className='carousel-button-action' onClick={onEditClick}>Edit</button>
                <button className='carousel-button-action' onClick={onDeleteClick}>Delete</button>
            </div>

    )
}

CarouselButton.propTypes = {
    showActions: PropTypes.bool,
    onDotsClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}