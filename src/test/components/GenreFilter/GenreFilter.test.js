import React from "react";
import {render} from '@testing-library/react'
import {GenreFilter} from "../../../components/GenreFilter/GenreFilter";


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
})