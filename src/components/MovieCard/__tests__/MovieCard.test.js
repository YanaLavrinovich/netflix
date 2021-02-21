import React from 'react';
import {render} from '@testing-library/react'
import {MovieCard} from '../MovieCard';
import userEvent from '@testing-library/user-event';
import {DELETE, EDIT} from '../../CarouselButton/constants';
import {MOVIE} from '../../../testUtils/constants';

describe('movie card', () => {
    it('render movie card', () => {
        const {asFragment} = render(<MovieCard
            movie={MOVIE}
            onMovieDelete={jest.fn()}
            onMovieEdit={jest.fn()}
            onMovieClick={jest.fn()}
        />)

        expect(asFragment()).toMatchSnapshot()
    })

    it('check click on delete button', () => {
        const onMovieDelete = jest.fn(),
            onMovieEdit = jest.fn(),
            onMovieClick = jest.fn()

        const {getByText, getByRole} = render(<MovieCard
            movie={MOVIE}
            onMovieDelete={onMovieDelete}
            onMovieEdit={onMovieEdit}
            onMovieClick={onMovieClick}
        />)

        userEvent.click(getByRole('button'))
        userEvent.click(getByText(DELETE))

        expect(onMovieDelete).toBeCalledTimes(1)
        expect(onMovieDelete).toBeCalledWith(MOVIE.id)
    })

    it('check click on edit button', () => {
        const onMovieDelete = jest.fn(),
            onMovieEdit = jest.fn(),
            onMovieClick = jest.fn()

        const {getByText, getByRole} = render(<MovieCard
            movie={MOVIE}
            onMovieDelete={onMovieDelete}
            onMovieEdit={onMovieEdit}
            onMovieClick={onMovieClick}
        />)

        userEvent.click(getByRole('button'))
        userEvent.click(getByText(EDIT))

        expect(onMovieEdit).toBeCalledTimes(1)
        expect(onMovieEdit).toBeCalledWith(MOVIE.id)
    })
})