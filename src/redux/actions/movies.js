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
    SET_SEARCH_TEXT,
    SET_VIEWED_MOVIE,
    UPDATE_MOVIE_FAILURE,
    UPDATE_MOVIE_STARTED,
    UPDATE_MOVIE_SUCCESS
} from './types';
import axios from 'axios';
import {GENRE_ALL} from '../../layouts/MovieListPage/MovieConstants';


export const fetchMoviesAction = (selectedGenre, selectedSort, searchText) => {
    return dispatch => {
        dispatch(fetchMoviesStarted())

        axios.get('http://localhost:4000/movies', {
            params: {
                sortBy: selectedSort,
                sortOrder: 'desc',
                filter: selectedGenre !== GENRE_ALL ? selectedGenre : null,
                searchBy: 'title',
                search: searchText,
                limit: 12
            }
        })
            .then(res => {
                dispatch(fetchMoviesSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchMoviesFailure(err.message))
            })
    }
}

export const deleteMovieAction = (movieId) => {
    return dispatch => {
        dispatch(deleteMovieStarted())

        axios.delete(`http://localhost:4000/movies/${movieId}`)
            .then(res => {
                dispatch(deleteMovieSuccess())
            })
            .catch(err => {
                dispatch(deleteMovieFailure(err.message))
            })
    }
}

export const updateMovieAction = (editedMovie) => {
    return dispatch => {
        dispatch(updateMovieStarted())

        axios.put('http://localhost:4000/movies', editedMovie)
            .then(res => {
                dispatch(updateMovieSuccess())
            })
            .catch(err => {
                dispatch(updateMovieFailure(err.message))
            })
    }
}

export const createMovieAction = (newMovie) => {
    return dispatch => {
        dispatch(createMovieStarted())

        axios.post('http://localhost:4000/movies', newMovie)
            .then(res => {
                dispatch(createMovieSuccess())
            })
            .catch(err => {
                dispatch(createMovieFailure(err.message))
            })
    }
}

export const setViewedMovieAction = (movieId) => {
    return {type: SET_VIEWED_MOVIE, payload: movieId}
}

export const setSearchTextAction = (searchText) => {
    return {type: SET_SEARCH_TEXT, payload: searchText}
}

const fetchMoviesStarted = () => {
    return {type: FETCH_MOVIES_STARTED}
}

const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

const fetchMoviesFailure = (error) => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}

const deleteMovieStarted = () => {
    return {type: DELETE_MOVIE_STARTED}
}

const deleteMovieSuccess = () => {
    return {type: DELETE_MOVIE_SUCCESS}
}

const deleteMovieFailure = (error) => {
    return {
        type: DELETE_MOVIE_FAILURE,
        payload: error
    }
}

const updateMovieStarted = () => {
    return {type: UPDATE_MOVIE_STARTED}
}

const updateMovieSuccess = () => {
    return {type: UPDATE_MOVIE_SUCCESS}
}

const updateMovieFailure = (error) => {
    return {
        type: UPDATE_MOVIE_FAILURE,
        payload: error
    }
}

const createMovieStarted = () => {
    return {type: CREATE_MOVIE_STARTED}
}

const createMovieSuccess = () => {
    return {type: CREATE_MOVIE_SUCCESS}
}

const createMovieFailure = (error) => {
    return {
        type: CREATE_MOVIE_FAILURE,
        payload: error
    }
}