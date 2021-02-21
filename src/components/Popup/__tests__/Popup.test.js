import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JSDOM } from 'jsdom'

import { Popup } from '../Popup';

const dom = new JSDOM();
global.document = dom.window.document;

it('should create a portal', () => {
    const handleClose = jest.fn();
    const portalName = 'Test Portal';
    const children = <div>{portalName}</div>;

    const container = document.createElement('div');
    container.setAttribute('id', 'modal-root');
    document.body.appendChild(container);

    const { unmount } = render(<Popup onClose={handleClose}>{children}</Popup>);

    expect(screen.getByText(portalName)).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    unmount();
    expect(handleClose).toBeCalledTimes(1);
    expect(screen.queryByText(portalName)).not.toBeInTheDocument();
})

