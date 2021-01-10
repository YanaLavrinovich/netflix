import React from 'react';
import {Popup} from '../Popup/Popup';
import MovieForm from '../MovieForm/MovieForm';
import PropTypes from 'prop-types';
import {ADD_MOVIE, SUBMIT} from './constants';

export function AddMoviePopup({onClose, onSubmit}) {
    return (
        <Popup
            title={ADD_MOVIE}
            onClose={onClose}
        >
            <MovieForm onSubmit={onSubmit} okLabel={SUBMIT}/>
        </Popup>
    )
}

AddMoviePopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

