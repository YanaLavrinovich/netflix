import React from 'react';
import {render} from '@testing-library/react';
import {JSDOM} from 'jsdom'
import {ADD_MOVIE, SUBMIT} from '../constants';
import AddMoviePopup from '../AddMoviePopup';

const dom = new JSDOM();
global.document = dom.window.document;

it('should create a add movie popup', () => {
    const handleClose = jest.fn();
    const handleSubmit = jest.fn();

    const container = document.createElement('div');
    container.setAttribute('id', 'modal-root');
    document.body.appendChild(container);

    const {getByText} = render(<AddMoviePopup onClose={handleClose} onSubmit={handleSubmit}/>);

    expect(getByText(ADD_MOVIE)).toBeInTheDocument();
    expect(getByText(SUBMIT)).toBeInTheDocument()
})

