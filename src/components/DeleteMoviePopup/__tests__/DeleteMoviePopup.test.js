import React from 'react';
import {render} from '@testing-library/react';
import {JSDOM} from 'jsdom'
import DeleteMoviePopup from '../DeleteMoviePopup';
import {CONFIRM, DELETE_CONFIRM_MESSAGE, DELETE_MOVIE} from '../constants';

const dom = new JSDOM();
global.document = dom.window.document;

it('should create a delete movie popup', () => {
    const handleClose = jest.fn();
    const handleConfirm = jest.fn();

    const container = document.createElement('div');
    container.setAttribute('id', 'modal-root');
    document.body.appendChild(container);

    const {getByText} = render(<DeleteMoviePopup onClose={handleClose} onConfirm={handleConfirm}/>);

    expect(getByText(DELETE_MOVIE)).toBeInTheDocument();
    expect(getByText(DELETE_CONFIRM_MESSAGE)).toBeInTheDocument();
    expect(getByText(CONFIRM)).toBeInTheDocument()
})

