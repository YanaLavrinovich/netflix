import React from 'react';
import {Popup} from '../Popup/Popup';
import './styles.css'
import {RedButton} from '../RedButton/RedButton';
import PropTypes from 'prop-types';
import {CONFIRM, DELETE_CONFIRM_MESSAGE, DELETE_MOVIE} from './constants';

export default function DeleteMoviePopup({onClose, onConfirm}) {
    return (
        <Popup
            title={DELETE_MOVIE}
            onClose={onClose}>
            <div><h2 className='delete-movie-popup-confirm-message'>{DELETE_CONFIRM_MESSAGE}</h2>
            </div>
            <div className='delete-movie-popup-footer'>
                <RedButton key='confirm' onClick={onConfirm}>{CONFIRM}</RedButton>
            </div>
        </Popup>
    )
}

DeleteMoviePopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
}