import {movies} from "../../../redux/reducers/movies";
import {MACHINE_STATE} from "../../../redux/reducers/constants";
import {DATE_SORT, GENRE_ALL} from "../../../layouts/common/constants";
import {
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIES_SUCCESS,
    REQUEST_FAILURE,
    REQUEST_STARTED,
    REQUEST_SUCCESS,
    SET_SEARCH_TEXT,
    SET_SELECTED_GENRE,
    SET_SELECTED_SORT
} from "../../../redux/actions/types";
import {MOVIE} from "../../utils/constants";

describe('movies reducer', () => {
    it('should return the initial state', () => {
        expect(movies(undefined, {})).toEqual(
            {
                machine: MACHINE_STATE.IDLE,
                movies: [],
                totalAmount: 0,
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                error: null,
                viewedMovie: null,
                searchText: ''
            }
        )
    })

    it('should handle REQUEST_STARTED', () => {
        expect(
            movies(undefined, {
                type: REQUEST_STARTED,
                payload: null
            })
        ).toEqual(
            {
                machine: MACHINE_STATE.FETCHING,
                movies: [],
                totalAmount: 0,
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                error: null,
                viewedMovie: null,
                searchText: ''
            }
        )
    })

    it('should handle FETCH_MOVIES_SUCCESS', () => {
        expect(
            movies(undefined, {
                type: FETCH_MOVIES_SUCCESS,
                payload: {data: [MOVIE], totalAmount: 1}
            })
        ).toEqual(
            {
                machine: MACHINE_STATE.IDLE,
                movies: [MOVIE],
                totalAmount: 1,
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                error: null,
                viewedMovie: null,
                searchText: ''
            }
        )
    })

    it('should handle FETCH_MOVIE_SUCCESS', () => {
        expect(
            movies(undefined, {
                type: FETCH_MOVIE_SUCCESS,
                payload: MOVIE
            })
        ).toEqual(
            {
                machine: MACHINE_STATE.IDLE,
                movies: [],
                totalAmount: 0,
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                error: null,
                viewedMovie: MOVIE,
                searchText: ''
            }
        )
    })

    it('should handle REQUEST_SUCCESS', () => {
        expect(
            movies(undefined, {
                type: REQUEST_SUCCESS
            })
        ).toEqual(
            {
                machine: MACHINE_STATE.IDLE,
                movies: [],
                totalAmount: 0,
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                error: null,
                viewedMovie: null,
                searchText: ''
            }
        )
    })

    it('should handle REQUEST_FAILURE', () => {
        expect(
            movies(undefined, {
                type: REQUEST_FAILURE,
                payload: {error: 'test error'}
            })
        ).toEqual(
            {
                machine: MACHINE_STATE.ERROR,
                movies: [],
                totalAmount: 0,
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                error: 'test error',
                viewedMovie: null,
                searchText: ''
            }
        )
    })

    it('should handle SET_SEARCH_TEXT', () => {
        expect(
            movies(undefined, {
                type: SET_SEARCH_TEXT,
                payload: 'search test'
            })
        ).toEqual(
            {
                machine: MACHINE_STATE.IDLE,
                movies: [],
                totalAmount: 0,
                selectedGenre: GENRE_ALL,
                selectedSort: DATE_SORT,
                error: null,
                viewedMovie: null,
                searchText: 'search test'
            }
        )
    })

    it('should handle SET_SELECTED_GENRE', () => {
        expect(
            movies(undefined, {
                type: SET_SELECTED_GENRE,
                payload: 'comedy'
            })
        ).toEqual(
            {
                machine: MACHINE_STATE.IDLE,
                movies: [],
                totalAmount: 0,
                selectedGenre: 'comedy',
                selectedSort: DATE_SORT,
                error: null,
                viewedMovie: null,
                searchText: ''
            }
        )
    })

    it('should handle SET_SELECTED_SORT', () => {
        expect(
            movies(undefined, {
                type: SET_SELECTED_SORT,
                payload: 'genres'
            })
        ).toEqual(
            {
                machine: MACHINE_STATE.IDLE,
                movies: [],
                totalAmount: 0,
                selectedGenre: GENRE_ALL,
                selectedSort: 'genres',
                error: null,
                viewedMovie: null,
                searchText: ''
            }
        )
    })
})