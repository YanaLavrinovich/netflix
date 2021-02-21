import {render} from '@testing-library/react';
import React from 'react'
import {MovieList} from '../MovieList';
import {NO_MOVIE_FOUND} from '../constants';
import {MOVIE} from '../../../testUtils/constants';

describe('render Movie List', () => {
    it('render Movie List without movies', () => {
        const {queryByText, getByText} = render(<MovieList
            totalAmount={0}
            movies={[]}
            onMovieDelete={jest.fn()}
            onMovieEdit={jest.fn()}
            onMovieClick={jest.fn()}
        />);

        expect(getByText(NO_MOVIE_FOUND)).toBeInTheDocument();
        expect(queryByText(MOVIE.title)).toBeNull();
    });

    it('render Movie List with movies', () => {
        const {queryByText, getByText} = render(<MovieList
            totalAmount={1}
            movies={[MOVIE]}
            onMovieDelete={jest.fn()}
            onMovieEdit={jest.fn()}
            onMovieClick={jest.fn()}
        />);

        expect(getByText(MOVIE.title)).toBeInTheDocument();
        expect(queryByText(NO_MOVIE_FOUND)).toBeNull();
    });
});
