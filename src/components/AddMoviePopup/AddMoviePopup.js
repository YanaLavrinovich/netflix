import React from 'react';
import {Popup} from '../Popup/Popup.js';
import './styles.css'
import {MovieForm} from '../MovieForm/MovieForm';

export function AddMoviePopup({onClose, onSubmit, onMovieChange}) {
    return (
        <Popup
            title='ADD MOVIE'
            onClose={onClose}
        >
            <MovieForm onMovieChange={onMovieChange} onSubmit={onSubmit}/>
        </Popup>
    )
}