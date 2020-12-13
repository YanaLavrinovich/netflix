import React from 'react';
import {Popup} from '../Popup/Popup.js';
import './styles.css'
import {MovieForm} from '../MovieForm/MovieForm';

export function EditMoviePopup({movie, onClose, onSubmit}) {
    console.log(movie)
    return (
        <Popup
            title='EDIT MOVIE'
            onClose={onClose}
        >
            <MovieForm movie={movie} onSubmit={onSubmit}/>
        </Popup>
    )
}