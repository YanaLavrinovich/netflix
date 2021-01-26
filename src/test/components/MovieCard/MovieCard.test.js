import React from "react";
import {render} from '@testing-library/react'
import {MovieCard} from "../../../components/MovieCard/MovieCard";
import userEvent from "@testing-library/user-event";
import {DELETE, EDIT} from "../../../components/CarouselButton/constants";
import {MOVIE} from "../../utils/constants";

describe('movie card', () => {
    it('render movie card', () => {
        const {asFragment} = render(<MovieCard
            movie={MOVIE}
            onDeleteClick={jest.fn()}
            onEditClick={jest.fn()}
            onMovieClick={jest.fn()}
        />)

        expect(asFragment(<MovieCard
            movie={MOVIE}
            onDeleteClick={jest.fn()}
            onEditClick={jest.fn()}
            onMovieClick={jest.fn()}
        />)).toMatchSnapshot()
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