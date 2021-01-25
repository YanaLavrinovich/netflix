import React from "react";
import {render} from '@testing-library/react'
import {sortOptions} from "../../../layouts/MovieListPage/constants";
import {Select} from "../../../components/Select/Select";
import userEvent from "@testing-library/user-event";


describe('select', () => {
    it('render select button', () => {
        const onChangeValue = jest.fn()

        const {getByText} = render(<Select
            onChangeValue={onChangeValue}
            options={sortOptions}
            selected='release_date'
        />)

        expect(getByText('RELEASE DATE')).toBeInTheDocument()
        expect(getByText('GENRE')).toBeInTheDocument()
        expect(getByText('RATING')).toBeInTheDocument()
    })

    it('click on select button', () => {
        const onChangeValue = jest.fn()

        const {getByTestId} = render(<Select
            onChangeValue={onChangeValue}
            options={sortOptions}
            selected='release_date'
        />)

        userEvent.selectOptions(getByTestId('select'), ['genres'])

        expect(onChangeValue).toBeCalledWith('genres')
        expect(onChangeValue).toBeCalledTimes(1)
    })
})