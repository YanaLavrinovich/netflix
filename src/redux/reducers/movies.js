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

const initialState = {
    isLoading: false,
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
                isLoading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                movies: action.payload.data,
                totalAmount: action.payload.totalAmount
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                viewedMovie: action.payload
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                error: null
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
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