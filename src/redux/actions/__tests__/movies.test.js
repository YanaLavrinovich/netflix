import axios from 'axios';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {FETCH_MOVIE_SUCCESS, FETCH_MOVIES_SUCCESS, REQUEST_FAILURE, REQUEST_STARTED,} from "../types";
import {fetchMovieByIdAction, fetchMoviesAction} from "../movies";
import {MOVIE} from '../../../testUtils/constants';
import {DATE_SORT, GENRE_ALL} from "../../../layouts/common/constants";

jest.mock('axios');
const mockStore = configureStore([thunk]);

const ERROR = 'error';

describe('should fire an action to fetch movie by id', () => {
    it('should fire successful action', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({data: MOVIE}));
        const expectedActions = [
            {type: REQUEST_STARTED},
            {type: FETCH_MOVIE_SUCCESS, payload: MOVIE},
        ];
        const store = mockStore({});
        await store.dispatch(fetchMovieByIdAction(MOVIE.id));
        expect(await store.getActions()).toEqual(expectedActions)
    })

    it('should fire failure action', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject({message: ERROR}));
        const expectedActions = [
            {type: REQUEST_STARTED},
            {type: REQUEST_FAILURE, payload: ERROR},
        ];
        const store = mockStore({});
        try {
            await store.dispatch(fetchMovieByIdAction(MOVIE.id));
        } finally {
            expect(await store.getActions()).toEqual(expectedActions)
        }
    })
});

describe('should fire an action to fetch movies', () => {
    it('should fire successful action', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve({data: [MOVIE]}));
        const expectedActions = [
            {type: REQUEST_STARTED},
            {type: FETCH_MOVIES_SUCCESS, payload: [MOVIE]},
        ];
        const store = mockStore({
            movies: {
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                searchText: 'test'
            }
        });
        await store.dispatch(fetchMoviesAction());
        expect(await store.getActions()).toEqual(expectedActions)
    })

    it('should fire successful action with empty movies', async () => {
        const expectedActions = [
            {type: REQUEST_STARTED},
            {type: FETCH_MOVIES_SUCCESS, payload: []},
        ];
        const store = mockStore({
            movies: {
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                searchText: ''
            }
        });
        await store.dispatch(fetchMoviesAction());
        expect(await store.getActions()).toEqual(expectedActions)
    })

    it('should fire failure action', async () => {
        axios.get.mockImplementationOnce(() => Promise.reject({message: ERROR}));
        const expectedActions = [
            {type: REQUEST_STARTED},
            {type: REQUEST_FAILURE, payload: ERROR},
        ];
        const store = mockStore({
            movies: {
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                searchText: 'test'
            }
        });
        try {
            await store.dispatch(fetchMoviesAction());
        } finally {
            expect(await store.getActions()).toEqual(expectedActions)
        }
    })
});
