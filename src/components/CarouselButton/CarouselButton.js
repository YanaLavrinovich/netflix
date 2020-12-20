import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export function CarouselButton({onEditClick, onDeleteClick}) {
    const [showActions, toggleActions] = useState(false)

    return (
        !showActions
            ? <button
                className='carousel-button-actions-open'
                onClick={() => toggleActions(!showActions)}
            >
                ...
            </button>
            : <div className='carousel-button-actions'>
                <button
                    className='carousel-button-actions-close'
                    onClick={() => toggleActions(!showActions)}
                >
                    <span>×</span>
                </button>
                <button
                    className='carousel-button-action'
                    onClick={onEditClick}
                >
                    Edit
                </button>
                <button
                    className='carousel-button-action'
                    onClick={onDeleteClick}
                >
                    Delete
                </button>
            </div>

    )
}

CarouselButton.propTypes = {
    onEditClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}