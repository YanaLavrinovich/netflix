import React from 'react';
import {Popup} from '../Popup/Popup';
import {MovieForm} from '../MovieForm/MovieForm';
import PropTypes from 'prop-types';

export function EditMoviePopup({movie, onClose, onSubmit}) {
    return (
        <Popup
            title='EDIT MOVIE'
            onClose={onClose}
        >
            <MovieForm
                movie={movie}
                onSubmit={onSubmit}
                okLabel='SAVE'
            />
        </Popup>
    )
}

EditMoviePopup.propTypes = {
    movie: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
