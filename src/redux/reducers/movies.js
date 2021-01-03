import {
    CREATE_MOVIE_FAILURE,
    CREATE_MOVIE_STARTED,
    CREATE_MOVIE_SUCCESS,
    DELETE_MOVIE_FAILURE,
    DELETE_MOVIE_STARTED,
    DELETE_MOVIE_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_STARTED,
    FETCH_MOVIES_SUCCESS,
    SET_VIEWED_MOVIE,
    UPDATE_MOVIE_FAILURE,
    UPDATE_MOVIE_STARTED,
    UPDATE_MOVIE_SUCCESS
} from '../actions/types';

const initialState = {
    isLoading: false,
    movies: [],
    error: null,
    viewedMovie: null,
    isNeedUpdateMovies: false
};

export function movies(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES_STARTED:
        case DELETE_MOVIE_STARTED:
        case CREATE_MOVIE_STARTED:
        case UPDATE_MOVIE_STARTED:
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
                isNeedUpdateMovies: false
            }
        case DELETE_MOVIE_SUCCESS:
        case CREATE_MOVIE_SUCCESS:
        case UPDATE_MOVIE_SUCCESS:
            return {
                ...state,
                error: null,
                isNeedUpdateMovies: true
            }
        case FETCH_MOVIES_FAILURE:
        case CREATE_MOVIE_FAILURE:
        case DELETE_MOVIE_FAILURE:
        case UPDATE_MOVIE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case SET_VIEWED_MOVIE:
            return {
                ...state,
                viewedMovie: action.payload
            }
        default:
            return state;
    }
}