import React from "react";
import {render} from '@testing-library/react'
import {MovieCard} from "../../../components/MovieCard/MovieCard";
import userEvent from "@testing-library/user-event";
import {DELETE, EDIT} from "../../../components/CarouselButton/constants";

const movie = {
    "id": 337167,
    "title": "Fifty Shades Freed",
    "tagline": "Don't miss the climax",
    "vote_average": 6.1,
    "vote_count": 1195,
    "release_date": "2018-02-07",
    "poster_path": "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    "budget": 55000000,
    "revenue": 136906000,
    "genres": [
        "Drama",
        "Romance"
    ],
    "runtime": 106
}

describe('movie card', () => {
    it('render movie card', () => {
        const {asFragment} = render(<MovieCard
            movie={movie}
            onDeleteClick={jest.fn()}
            onEditClick={jest.fn()}
            onMovieClick={jest.fn()}
        />)

        expect(asFragment(<MovieCard
            movie={movie}
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
            movie={movie}
            onMovieDelete={onMovieDelete}
            onMovieEdit={onMovieEdit}
            onMovieClick={onMovieClick}
        />)

        userEvent.click(getByRole('button'))
        userEvent.click(getByText(DELETE))

        expect(onMovieDelete).toBeCalledTimes(1)
        expect(onMovieDelete).toBeCalledWith(movie.id)
    })

    it('check click on edit button', () => {
        const onMovieDelete = jest.fn(),
            onMovieEdit = jest.fn(),
            onMovieClick = jest.fn()

        const {getByText, getByRole} = render(<MovieCard
            movie={movie}
            onMovieDelete={onMovieDelete}
            onMovieEdit={onMovieEdit}
            onMovieClick={onMovieClick}
        />)

        userEvent.click(getByRole('button'))
        userEvent.click(getByText(EDIT))

        expect(onMovieEdit).toBeCalledTimes(1)
        expect(onMovieEdit).toBeCalledWith(movie.id)
    })
})