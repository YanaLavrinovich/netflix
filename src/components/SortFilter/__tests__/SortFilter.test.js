import React from 'react';
import {render} from '@testing-library/react'
import {SortFilter} from '../SortFilter';
import {sortOptions} from '../../../layouts/MovieListPage/constants';
import {SORT_BY} from '../constants';


describe('sort filter', () => {
    it('render sort filter', () => {
        const onSortChange = jest.fn()

        const {getByText} = render(<SortFilter
            onSortChange={onSortChange}
            sortOptions={sortOptions}
            selectedSort='release_date'
        />)

        expect(getByText('RELEASE DATE')).toBeInTheDocument()
        expect(getByText('GENRE')).toBeInTheDocument()
        expect(getByText('RATING')).toBeInTheDocument()
        expect(getByText(SORT_BY)).toBeInTheDocument()
    })
})