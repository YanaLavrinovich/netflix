import React from "react";
import Header from "../../../components/Header/Header";
import configureStore from 'redux-mock-store';
import {Route} from "react-router-dom";
import {Provider} from "react-redux";
import {PLUS_ADD_MOVIE} from "../../../components/Header/constants";
import {renderWithProviders} from "../../utils/testUtils";

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

const mockStore = configureStore([]);

describe('header', () => {
    it('render header with viewed movie', async () => {
        const store = mockStore({
            movies: {
                viewedMovie: movie
            }
        });
        store.dispatch = jest.fn();

        const onAddMovieClick = jest.fn()
        const onMagnifierClick = jest.fn()
        const onSearchClick = jest.fn()

        const {getByText, queryByText} = renderWithProviders(
            <Provider store={store}>
                <Route path='/film/:id'>
                    <Header
                        onAddMovieClick={onAddMovieClick}
                        onMagnifierClick={onMagnifierClick}
                        onSearchClick={onSearchClick}
                    />
                </Route>
            </Provider>,
            {
                route: "/film/337167"
            }
        );

        expect(getByText('netflix')).toBeInTheDocument()
        expect(queryByText(PLUS_ADD_MOVIE)).toBeNull()
        expect(getByText(movie.title)).toBeInTheDocument()
    })

    it('render header without viewed movie', async () => {
        const store = mockStore({
            movies: {
                viewedMovie: null
            }
        });
        store.dispatch = jest.fn();

        const onAddMovieClick = jest.fn()
        const onMagnifierClick = jest.fn()
        const onSearchClick = jest.fn()

        const {getByText, queryByText} = renderWithProviders(
            <Provider store={store}>
                <Route path='/'>
                    <Header
                        onAddMovieClick={onAddMovieClick}
                        onMagnifierClick={onMagnifierClick}
                        onSearchClick={onSearchClick}
                    />
                </Route>
            </Provider>,
            {
                route: "/"
            }
        );

        expect(getByText('netflix')).toBeInTheDocument()
        expect(queryByText(PLUS_ADD_MOVIE)).toBeInTheDocument()
        expect(queryByText(movie.title)).toBeNull()
    })
})