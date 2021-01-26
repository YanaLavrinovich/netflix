import React from "react";
import Header from "../../../components/Header/Header";
import configureStore from 'redux-mock-store';
import {Route} from "react-router-dom";
import {Provider} from "react-redux";
import {PLUS_ADD_MOVIE} from "../../../components/Header/constants";
import {renderWithProviders} from "../../utils/testUtils";
import {MOVIE} from "../../utils/constants";

const mockStore = configureStore([]);

describe('header', () => {
    it('render header with viewed movie', async () => {
        const store = mockStore({
            movies: {
                viewedMovie: MOVIE
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
        expect(getByText(MOVIE.title)).toBeInTheDocument()
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
        expect(queryByText(MOVIE.title)).toBeNull()
    })
})