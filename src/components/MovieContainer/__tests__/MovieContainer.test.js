import {render} from '@testing-library/react';
import React from 'react'
import {MovieContainer} from '../MovieContainer';
import {sortOptions} from '../../../layouts/MovieListPage/constants';
import {PLEASE_WAIT} from '../constants';
import {MOVIE} from '../../../testUtils/constants';


describe('render Movie Container', () => {
    it('render Movie Container with loading', () => {
        const {queryByText, getByText} = render(<MovieContainer
            isLoading={true}
            selectedGenre='ALL'
            totalAmount={1}
            movies={[MOVIE]}
            sortOptions={sortOptions}
            selectedSort='genres'
            onGenreFilterChange={jest.fn()}
            onSortChange={jest.fn()}
            onMovieDelete={jest.fn()}
            onMovieEdit={jest.fn()}
            onMovieClick={jest.fn()}
        />);

        expect(getByText(PLEASE_WAIT)).toBeInTheDocument();
        expect(getByText('GENRE')).toBeInTheDocument();
        expect(getByText('ALL')).toBeInTheDocument();

        expect(queryByText(MOVIE.title)).toBeNull();
    });

    it('render Movie Container without loading', () => {
        const {queryByText, getByText} = render(<MovieContainer
            isLoading={false}
            selectedGenre='ALL'
            totalAmount={1}
            movies={[MOVIE]}
            sortOptions={sortOptions}
            selectedSort='genres'
            onGenreFilterChange={jest.fn()}
            onSortChange={jest.fn()}
            onMovieDelete={jest.fn()}
            onMovieEdit={jest.fn()}
            onMovieClick={jest.fn()}
        />);

        expect(getByText(MOVIE.title)).toBeInTheDocument();
        expect(getByText('GENRE')).toBeInTheDocument();
        expect(getByText('ALL')).toBeInTheDocument();

        expect(queryByText(PLEASE_WAIT)).toBeNull();
    });
});
