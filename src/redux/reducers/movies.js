import {
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIES_SUCCESS,
    REQUEST_FAILURE,
    REQUEST_STARTED,
    REQUEST_SUCCESS,
    SET_SEARCH_TEXT,
    SET_SELECTED_GENRE,
    SET_SELECTED_SORT
} from '../actions/types';
import {DATE_SORT, GENRE_ALL} from '../../layouts/common/constants';
import {MACHINE_STATE} from './constants';

const initialState = {
    machine: MACHINE_STATE.IDLE,
    movies: [],
    totalAmount: 0,
    selectedGenre: GENRE_ALL,
    selectedSort: DATE_SORT,
    error: null,
    viewedMovie: null,
    searchText: ''
};

export function movies(state = initialState, action) {
    switch (action.type) {
        case REQUEST_STARTED:
            return {
                ...state,
                machine: MACHINE_STATE.FETCHING
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                machine: MACHINE_STATE.IDLE,
                movies: action.payload.data,
                totalAmount: action.payload.totalAmount
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                machine: MACHINE_STATE.IDLE,
                viewedMovie: action.payload
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                machine: MACHINE_STATE.IDLE,
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                machine: MACHINE_STATE.ERROR,
                error: action.payload.error
            }
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        case SET_SELECTED_GENRE:
            return {
                ...state,
                selectedGenre: action.payload
            }
        case SET_SELECTED_SORT:
            return {
                ...state,
                selectedSort: action.payload
            }
        default:
            return state;
    }
}