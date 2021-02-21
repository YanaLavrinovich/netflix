import React from 'react';
import {render} from '@testing-library/react'
import {CarouselButton} from '../CarouselButton';
import {DELETE, EDIT} from '../constants';
import userEvent from '@testing-library/user-event';


describe('carousel button', () => {
    it('render carousel button', () => {
        const onEditClick = jest.fn()
        const onDeleteClick = jest.fn()

        const {queryByText} = render(<CarouselButton
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
        />)

        expect(queryByText(EDIT)).toBeNull()
        expect(queryByText(DELETE)).toBeNull()
    })

    it('show actions', () => {
        const onEditClick = jest.fn()
        const onDeleteClick = jest.fn()

        const {queryByText, getByRole} = render(<CarouselButton
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
        />)

        expect(queryByText(EDIT)).toBeNull()
        expect(queryByText(DELETE)).toBeNull()

        userEvent.click(getByRole('button'))

        expect(queryByText(EDIT)).toBeInTheDocument()
        expect(queryByText(DELETE)).toBeInTheDocument()
    })

    it('hide actions', () => {
        const onEditClick = jest.fn()
        const onDeleteClick = jest.fn()

        const {queryByText, getByRole} = render(<CarouselButton
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
        />)

        expect(queryByText('×')).toBeNull()

        userEvent.click(getByRole('button'))
        expect(queryByText('×')).toBeInTheDocument()

        userEvent.click(queryByText('×'))
        expect(queryByText('×')).toBeNull()
    })
})