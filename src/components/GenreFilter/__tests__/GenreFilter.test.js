import React from "react";
import {render, waitFor} from '@testing-library/react'
import {GenreFilter} from "../../../components/GenreFilter/GenreFilter";
import userEvent from "@testing-library/user-event";


describe('genre filter', () => {
    it('render genre filter', () => {
        const onGenreFilterChange = jest.fn()

        const {getByText} = render(<GenreFilter
            onGenreFilterChange={onGenreFilterChange}
            selectedGenre='ALL'
        />)

        expect(getByText('ALL')).toBeInTheDocument()
        expect(getByText('DOCUMENTARY')).toBeInTheDocument()
        expect(getByText('COMEDY')).toBeInTheDocument()
        expect(getByText('HORROR')).toBeInTheDocument()
        expect(getByText('CRIME')).toBeInTheDocument()

    })

    it('click on genre filter button', async () => {
        const onGenreFilterChange = jest.fn()

        const {getByText} = render(<GenreFilter
            onGenreFilterChange={onGenreFilterChange}
            selectedGenre='ALL'
        />)

        expect(getByText('ALL')).toBeInTheDocument()
        expect(getByText('DOCUMENTARY')).toBeInTheDocument()

        userEvent.click(getByText('DOCUMENTARY'))
        await waitFor(() =>
            expect(onGenreFilterChange).toHaveBeenCalledWith('documentary')
        )
    })
})