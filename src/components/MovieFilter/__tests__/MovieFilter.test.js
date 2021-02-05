import {render} from '@testing-library/react';
import React from 'react'
import {MovieFilter} from "../../../components/MovieFilter/MovieFilter";
import {sortOptions} from "../../../layouts/MovieListPage/constants";

test('render Movie Filter', () => {
    const onSortChange = jest.fn()
    const onGenreFilterChange = jest.fn()

    const {asFragment} = render(<MovieFilter
        selectedGenre='ALL'
        sortOptions={sortOptions}
        selectedSort='genres'
        onSortChange={onSortChange}
        onGenreFilterChange={onGenreFilterChange}
    />);

    expect(asFragment()).toMatchSnapshot();
});
