import React from 'react';
import {Popup} from '../Popup/Popup';
import {MovieForm} from '../MovieForm/MovieForm';
import PropTypes from 'prop-types';

export function AddMoviePopup({onClose, onSubmit}) {
    return (
        <Popup
            title='ADD MOVIE'
            onClose={onClose}
        >
            <MovieForm onSubmit={onSubmit} okLabel='SUBMIT'/>
        </Popup>
    )
}

AddMoviePopup.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

