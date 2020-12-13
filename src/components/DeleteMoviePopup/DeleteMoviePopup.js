import React from 'react';
import {Popup} from '../Popup/Popup.js';
import './styles.css'
import {RedButton} from "../RedButton/RedButton";

export function DeleteMoviePopup({onClose, onConfirm}) {
    return (
        <Popup
            title='DELETE MOVIE'
            onClose={onClose}>
            <div><h2 className='delete-confirm-message'>Are you sure you want to delete this movie?</h2></div>
            <div className='form-footer'>
                <RedButton key='confirm' onClick={onConfirm}>CONFIRM</RedButton>
            </div>
        </Popup>
    )
}