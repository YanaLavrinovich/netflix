import {render} from '@testing-library/react';
import React from 'react'
import {MovieList} from "../../../components/MovieList/MovieList";
import {NO_MOVIE_FOUND} from "../../../components/MovieList/constants";

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
        expect(queryByText(movie.title)).toBeNull();
    });

    it('render Movie List with movies', () => {
        const {queryByText, getByText} = render(<MovieList
            totalAmount={1}
            movies={[movie]}
            onMovieDelete={jest.fn()}
            onMovieEdit={jest.fn()}
            onMovieClick={jest.fn()}
        />);

        expect(getByText(movie.title)).toBeInTheDocument();
        expect(queryByText(NO_MOVIE_FOUND)).toBeNull();
    });
});
