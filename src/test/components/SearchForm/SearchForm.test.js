import React from "react";
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {REQUIRED_FIELD} from "../../../components/MovieForm/constants";
import userEvent from "@testing-library/user-event";
import {SearchForm} from "../../../components/SearchForm/SearchForm";
import {FIND_YOUR_MOVIE, SEARCH} from "../../../components/MovieSearcher/constants";
import {SEARCH_INPUT_PLACEHOLDER} from "../../../components/SearchInput/constants";


describe('search form', () => {
    it('render search form', () => {
        const onSearchClick = jest.fn()

        const {getByText, getByDisplayValue} = render(<SearchForm
            title={FIND_YOUR_MOVIE}
            searchLabel={SEARCH}
            searchText='test'
            onSearchClick={onSearchClick}
        />)

        const title = getByText(FIND_YOUR_MOVIE)
        const searchLabel = getByText(SEARCH)
        const searchText = getByDisplayValue('test')

        expect(title).toBeInTheDocument()
        expect(searchLabel).toBeInTheDocument()
        expect(searchText).toBeInTheDocument()
    })

    it('check on search click button', async () => {
        const onSearchClick = jest.fn()

        render(<SearchForm
            title={FIND_YOUR_MOVIE}
            searchLabel={SEARCH}
            searchText='test'
            onSearchClick={onSearchClick}
        />)

        userEvent.click(screen.getByText(SEARCH))

        await waitFor(() =>
            expect(onSearchClick).toHaveBeenCalledWith('test')
        )
    })

    it('change value in search input', async () => {
        const onSearchClick = jest.fn()

        render(<SearchForm
            title={FIND_YOUR_MOVIE}
            searchLabel={SEARCH}
            searchText=''
            onSearchClick={onSearchClick}
        />)

        const searchInput = screen.getByPlaceholderText(SEARCH_INPUT_PLACEHOLDER)
        expect(searchInput).toHaveDisplayValue('')

        fireEvent.change(searchInput, {target: {value: 'test'}})

        await waitFor(() => {
            expect(searchInput).toHaveDisplayValue('test')
        })
    })

    it('check validation in form group', async () => {
        const onSearchClick = jest.fn()

        render(<SearchForm
            title={FIND_YOUR_MOVIE}
            searchLabel={SEARCH}
            searchText='test'
            onSearchClick={onSearchClick}
        />)

        const searchInput = screen.getByPlaceholderText(SEARCH_INPUT_PLACEHOLDER)
        expect(searchInput).toHaveDisplayValue('test')

        fireEvent.change(searchInput, {target: {value: ''}})
        userEvent.click(screen.getByText(SEARCH))

        await waitFor(() => {
            expect(searchInput).toHaveDisplayValue('')
            expect(screen.getByText(REQUIRED_FIELD)).toBeInTheDocument()
            expect(onSearchClick).toHaveBeenCalledTimes(0)
        })
    })
})