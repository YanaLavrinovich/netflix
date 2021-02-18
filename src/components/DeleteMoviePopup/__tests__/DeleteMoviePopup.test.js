import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {JSDOM} from "jsdom"
import DeleteMoviePopup from "../DeleteMoviePopup";
import {CONFIRM, DELETE_CONFIRM_MESSAGE, DELETE_MOVIE} from "../constants";

const dom = new JSDOM();
global.document = dom.window.document;

it('should create a delete movie popup', () => {
    const handleClose = jest.fn();
    const handleConfirm = jest.fn();

    const container = document.createElement('div');
    container.setAttribute('id', 'modal-root');
    document.body.appendChild(container);

    const {unmount} = render(<DeleteMoviePopup onClose={handleClose} onConfirm={handleConfirm}/>);

    expect(screen.getByText(DELETE_MOVIE)).toBeInTheDocument();
    expect(screen.getByText(DELETE_CONFIRM_MESSAGE)).toBeInTheDocument();
    expect(screen.getByText(CONFIRM)).toBeInTheDocument()
    userEvent.click(screen.getByText('×'));
    unmount();
    expect(handleClose).toBeCalledTimes(1);
    expect(screen.queryByText(DELETE_MOVIE)).not.toBeInTheDocument();
})

