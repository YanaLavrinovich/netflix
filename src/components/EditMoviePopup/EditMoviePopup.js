import React from 'react';
import {Popup} from '../Popup/Popup';
import {MovieForm} from '../MovieForm/MovieForm';
import PropTypes from 'prop-types';
import {EDIT_MOVIE, SAVE} from "./constants";

export function EditMoviePopup({movie, onClose, onSubmit}) {
    return (
        <Popup
            title={EDIT_MOVIE}
            onClose={onClose}
        >
            <MovieForm
                movie={movie}
                onSubmit={onSubmit}
                okLabel={SAVE}
            />
        </Popup>
    )
}

EditMoviePopup.propTypes = {
    movie: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
