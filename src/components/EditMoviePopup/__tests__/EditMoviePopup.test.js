import React from 'react';
import {render} from '@testing-library/react';
import {JSDOM} from 'jsdom'
import {EDIT_MOVIE, SAVE} from '../constants';
import EditMoviePopup from '../EditMoviePopup';
import {MOVIE} from "../../../testUtils/constants";

const dom = new JSDOM();
global.document = dom.window.document;

it('should create a add movie popup', () => {
    const handleClose = jest.fn();
    const handleSubmit = jest.fn();

    const container = document.createElement('div');
    container.setAttribute('id', 'modal-root');
    document.body.appendChild(container);

    const {getByText} = render(
        <EditMoviePopup
            movie={MOVIE}
            onClose={handleClose}
            onSubmit={handleSubmit}
        />
    );

    expect(getByText(EDIT_MOVIE)).toBeInTheDocument();
    expect(getByText(SAVE)).toBeInTheDocument()
})

