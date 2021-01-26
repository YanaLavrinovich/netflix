import React from "react";
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {MovieForm} from "../../../components/MovieForm/MovieForm";
import {
    AT_LEAST_ONE_GENRE,
    DATE_PLACEHOLDER,
    GENRE_PLACEHOLDER,
    MOVIE_URL_PLACEHOLDER,
    OVERVIEW_PLACEHOLDER,
    REQUIRED_FIELD,
    RUNTIME_PLACEHOLDER,
    TITLE_PLACEHOLDER
} from "../../../components/MovieForm/constants";
import userEvent from "@testing-library/user-event";
import {MOVIE} from "../../utils/constants";

describe('movie form', () => {
    it('render edit movie form', () => {
        const handleSubmit = jest.fn()
        const {getByText, getByDisplayValue} = render(<MovieForm
            movie={MOVIE}
            okLabel='SAVE'
            onSubmit={handleSubmit}
        />)

        const idForm = getByText(MOVIE.id)
        const titleForm = getByDisplayValue(MOVIE.title)
        const releaseDateForm = getByDisplayValue(MOVIE.release_date)
        const posterPathForm = getByDisplayValue(MOVIE.poster_path)
        const genresDramaForm = getByText(/Drama/)
        const genresRomanceForm = getByText(/Romance/)
        const overviewForm = getByDisplayValue(MOVIE.overview)
        const runtimeForm = getByDisplayValue(MOVIE.runtime)

        expect(idForm).toBeInTheDocument()
        expect(titleForm).toBeInTheDocument()
        expect(releaseDateForm).toBeInTheDocument()
        expect(posterPathForm).toBeInTheDocument()
        expect(genresDramaForm).toBeInTheDocument()
        expect(genresRomanceForm).toBeInTheDocument()
        expect(overviewForm).toBeInTheDocument()
        expect(runtimeForm).toBeInTheDocument()
    })

    it('render add movie form', () => {
        const handleSubmit = jest.fn()
        const {queryByLabelText, getByPlaceholderText, getByText} = render(<MovieForm
            okLabel='SAVE'
            onSubmit={handleSubmit}
        />)

        const idForm = queryByLabelText('MOVIE ID')
        const titleForm = getByPlaceholderText(TITLE_PLACEHOLDER)
        const releaseDateForm = getByPlaceholderText(DATE_PLACEHOLDER)
        const posterPathForm = getByPlaceholderText(MOVIE_URL_PLACEHOLDER)
        const genresForm = getByText(GENRE_PLACEHOLDER)
        const overviewForm = getByPlaceholderText(OVERVIEW_PLACEHOLDER)
        const runtimeForm = getByPlaceholderText(RUNTIME_PLACEHOLDER)

        expect(idForm).toBeNull()
        expect(titleForm).toHaveDisplayValue('')
        expect(releaseDateForm).toHaveDisplayValue('')
        expect(posterPathForm).toHaveDisplayValue('')
        expect(genresForm).toBeInTheDocument()
        expect(overviewForm).toHaveDisplayValue('')
        expect(runtimeForm).toHaveDisplayValue('')
    })

    it('check on submit click in edit movie form', async () => {
        const handleSubmit = jest.fn()
        render(<MovieForm
            movie={MOVIE}
            okLabel='SAVE'
            onSubmit={handleSubmit}
        />)

        userEvent.click(screen.getByText('SAVE'))

        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({...MOVIE})
        )
    })

    it('change value in form group', async () => {
        const handleSubmit = jest.fn()
        const {getByPlaceholderText} = render(<MovieForm
            okLabel='SAVE'
            onSubmit={handleSubmit}
        />)

        const titleForm = getByPlaceholderText(TITLE_PLACEHOLDER)
        expect(titleForm).toHaveDisplayValue('')

        fireEvent.change(titleForm, {target: {value: 'test'}})

        await waitFor(() => {
            expect(titleForm).toHaveDisplayValue('test')
        })
    })

    it('check validation in form group', async () => {
        const handleSubmit = jest.fn()
        const {getByPlaceholderText, getByText} = render(<MovieForm
            movie={MOVIE}
            okLabel='SAVE'
            onSubmit={handleSubmit}
        />)

        const titleForm = getByPlaceholderText(TITLE_PLACEHOLDER)
        expect(titleForm).toHaveDisplayValue(MOVIE.title)

        fireEvent.change(titleForm, {target: {value: ''}})
        userEvent.click(screen.getByText('SAVE'))

        await waitFor(() => {
            expect(titleForm).toHaveDisplayValue('')
            expect(getByText(REQUIRED_FIELD)).toBeInTheDocument()
            expect(handleSubmit).toHaveBeenCalledTimes(0)
        })
    })

    it('check validation in form dropdown', async () => {
        const handleSubmit = jest.fn()
        const {getByText} = render(<MovieForm
            movie={{...MOVIE, genres: []}}
            okLabel='SAVE'
            onSubmit={handleSubmit}
        />)

        const genresForm = getByText(GENRE_PLACEHOLDER)
        userEvent.click(screen.getByText('SAVE'))

        await waitFor(() => {
            expect(genresForm).toBeInTheDocument()
            expect(getByText(AT_LEAST_ONE_GENRE)).toBeInTheDocument()
            expect(handleSubmit).toHaveBeenCalledTimes(0)
        })
    })

    it('show genres options', () => {
        const handleSubmit = jest.fn()
        const {queryByText, getByText} = render(<MovieForm
            movie={MOVIE}
            okLabel='SAVE'
            onSubmit={handleSubmit}
        />)

        const genresForm = getByText(/Drama/)

        expect(genresForm).toBeInTheDocument()
        expect(queryByText('Action')).toBeNull()

        userEvent.click(genresForm)

        expect(getByText('Action')).toBeInTheDocument()
    })
})