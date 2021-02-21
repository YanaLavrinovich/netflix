import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {DELETE, EDIT} from './constants';

export function CarouselButton({onEditClick, onDeleteClick}) {
    const [showActions, toggleActions] = useState(false)

    const handleClickCarouselButton = useCallback(() => {
        toggleActions(!showActions)
    }, [showActions, toggleActions])

    return (
        !showActions
            ? <button
                className='carousel-button-actions-open'
                onClick={handleClickCarouselButton}
            >
            </button>
            : <div className='carousel-button-actions'>
                <button
                    className='carousel-button-actions-close'
                    onClick={handleClickCarouselButton}
                >
                    <span>×</span>
                </button>
                <button
                    className='carousel-button-action'
                    onClick={onEditClick}
                >
                    {EDIT}
                </button>
                <button
                    className='carousel-button-action'
                    onClick={onDeleteClick}
                >
                    {DELETE}
                </button>
            </div>

    )
}

CarouselButton.propTypes = {
    onEditClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}