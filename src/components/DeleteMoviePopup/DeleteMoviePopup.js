import React from 'react';
import {Popup} from '../Popup/Popup.js';
import './styles.css'

export function DeleteMoviePopup({isShow, onClose, onConfirm}) {
    return (
        <Popup
            title='DELETE MOVIE'
            onClose={onClose}
            onConfirm={onConfirm}
            isShow={isShow}
        >
            <h2 className='delete-confirm-message'>Are you sure you want to delete this movie?</h2>
        </Popup>
    )
}