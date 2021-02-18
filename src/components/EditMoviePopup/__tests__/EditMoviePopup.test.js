import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {JSDOM} from "jsdom"
import {EDIT_MOVIE, SAVE} from "../constants";
import {EditMoviePopup} from "../EditMoviePopup";

const dom = new JSDOM();
global.document = dom.window.document;

it('should create a add movie popup', () => {
    const handleClose = jest.fn();
    const handleSubmit = jest.fn();

    const container = document.createElement('div');
    container.setAttribute('id', 'modal-root');
    document.body.appendChild(container);

    const {unmount} = render(<EditMoviePopup onClose={handleClose} onSubmit={handleSubmit}/>);

    expect(screen.getByText(EDIT_MOVIE)).toBeInTheDocument();
    expect(screen.getByText(SAVE)).toBeInTheDocument()
    userEvent.click(screen.getByText('×'));
    unmount();
    expect(handleClose).toBeCalledTimes(1);
    expect(screen.queryByText(EDIT_MOVIE)).not.toBeInTheDocument();
})

