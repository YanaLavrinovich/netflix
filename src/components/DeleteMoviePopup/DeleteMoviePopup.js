import React from 'react';
import {Popup} from '../Popup/Popup';
import './styles.css'
import {RedButton} from '../RedButton/RedButton';
import PropTypes from 'prop-types';

export function DeleteMoviePopup({onClose, onConfirm}) {
    return (
        <Popup
            title='DELETE MOVIE'
            onClose={onClose}>
            <div><h2 className='delete-movie-popup-confirm-message'>Are you sure you want to delete this movie?</h2>
            </div>
            <div className='delete-movie-popup-footer'>
                <RedButton key='confirm' onClick={onConfirm}>CONFIRM</RedButton>
            </div>
        </Popup>
    )
}

DeleteMoviePopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
}