import React from 'react';
import {Popup} from '../Popup/Popup.js';
import './styles.css'
import {AddMovieForm} from '../AddMovieForm/AddMovieForm';

export function AddMoviePopup({isShow, onClose, onConfirm}) {
    return (
        <Popup
            title='ADD MOVIE'
            onClose={onClose}
            onConfirm={onConfirm}
            isShow={isShow}
        >
            <AddMovieForm/>
        </Popup>
    )
}