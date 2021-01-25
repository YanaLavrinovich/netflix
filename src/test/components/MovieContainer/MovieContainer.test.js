import {render} from '@testing-library/react';
import React from 'react'
import {MovieContainer} from "../../../components/MovieContainer/MovieContainer";
import {sortOptions} from "../../../layouts/MovieListPage/constants";
import {PLEASE_WAIT} from "../../../components/MovieContainer/constants";

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

describe('render Movie Container', () => {
    it('render Movie Container with loading', () => {
        const {queryByText, getByText} = render(<MovieContainer
            isLoading={true}
            selectedGenre='ALL'
            totalAmount={1}
            movies={[movie]}
            sortOptions={sortOptions}
            selectedSort='geners'
            onGenreFilterChange={jest.fn()}
            onSortChange={jest.fn()}
            onMovieDelete={jest.fn()}
            onMovieEdit={jest.fn()}
            onMovieClick={jest.fn()}
        />);

        expect(getByText(PLEASE_WAIT)).toBeInTheDocument();
        expect(getByText('GENRE')).toBeInTheDocument();
        expect(getByText('ALL')).toBeInTheDocument();

        expect(queryByText(movie.title)).toBeNull();
    });

    it('render Movie Container without loading', () => {
        const {queryByText, getByText} = render(<MovieContainer
            isLoading={false}
            selectedGenre='ALL'
            totalAmount={1}
            movies={[movie]}
            sortOptions={sortOptions}
            selectedSort='geners'
            onGenreFilterChange={jest.fn()}
            onSortChange={jest.fn()}
            onMovieDelete={jest.fn()}
            onMovieEdit={jest.fn()}
            onMovieClick={jest.fn()}
        />);

        expect(getByText(movie.title)).toBeInTheDocument();
        expect(getByText('GENRE')).toBeInTheDocument();
        expect(getByText('ALL')).toBeInTheDocument();

        expect(queryByText(PLEASE_WAIT)).toBeNull();
    });
});
