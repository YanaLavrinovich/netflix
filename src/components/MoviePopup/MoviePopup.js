import React from 'react';
import {DeleteMoviePopup} from '../DeleteMoviePopup/DeleteMoviePopup';
import {AddMoviePopup} from '../AddMoviePopup/AddMoviePopup';

export function MoviePopup(props) {
    const {type, children} = props
    return (
        type === 'add' ? <AddMoviePopup {...props}>
                {children}
            </AddMoviePopup>
            : <DeleteMoviePopup {...props}>
                {children}
            </DeleteMoviePopup>
    )
}