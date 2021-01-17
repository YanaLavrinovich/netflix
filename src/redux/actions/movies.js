import {
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIES_SUCCESS,
    REQUEST_FAILURE,
    REQUEST_STARTED,
    REQUEST_SUCCESS,
    SET_SEARCH_TEXT,
    SET_SELECTED_GENRE,
    SET_SELECTED_SORT
} from './types';
import axios from 'axios';
import {GENRE_ALL} from '../../layouts/common/constants';


export const fetchMoviesAction = () => {
    return (dispatch, getState) => {
        dispatch(requestStarted())
        const {searchText, selectedGenre, selectedSort} = getState().movies

        if (searchText === '') {
            return dispatch(fetchMoviesSuccess([]))
        }

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
                dispatch(requestFailure(err.message))
            })
    }
}

export const fetchMovieByIdAction = (movieId) => {
    return (dispatch) => {
        dispatch(requestStarted())

        axios.get(`http://localhost:4000/movies/${movieId}`)
            .then(res => {
                dispatch(fetchMovieByIdSuccess(res.data))
            })
            .catch(err => {
                dispatch(requestFailure(err.message))
            })
    }
}

export const deleteMovieAction = (movieId) => {
    return dispatch => {
        dispatch(requestStarted())

        axios.delete(`http://localhost:4000/movies/${movieId}`)
            .then(res => {
                dispatch(requestSuccess())
            })
            .catch(err => {
                dispatch(requestFailure(err.message))
            })
            .finally(() => {
                dispatch(fetchMoviesAction())
            })
    }
}

export const updateMovieAction = (editedMovie) => {
    return dispatch => {
        dispatch(requestStarted())

        axios.put('http://localhost:4000/movies', editedMovie)
            .then(res => {
                dispatch(requestSuccess())
            })
            .catch(err => {
                dispatch(requestFailure(err.message))
            })
            .finally(() => {
                dispatch(fetchMoviesAction())
            })
    }
}

export const createMovieAction = (newMovie) => {
    return dispatch => {
        dispatch(requestStarted())

        axios.post('http://localhost:4000/movies', newMovie)
            .then(res => {
                dispatch(requestSuccess())
            })
            .catch(err => {
                dispatch(requestFailure(err.message))
            })
            .finally(() => {
                dispatch(fetchMoviesAction())
            })
    }
}

export const setSearchTextAction = (searchText) => {
    return dispatch => {
        Promise.resolve(dispatch(setSearchTextSuccess(searchText)))
            .finally(() => {
                dispatch(fetchMoviesAction())
            })
    }
}

export const setSearchTextSuccess = (searchText) => {
    return {type: SET_SEARCH_TEXT, payload: searchText}
}

export const setSelectedSortAction = (selectedSort) => {
    return dispatch => {
        Promise.resolve(dispatch(setSelectedSortSuccess(selectedSort)))
            .finally(() => {
                dispatch(fetchMoviesAction())
            })
    }
}

export const setSelectedSortSuccess = (selectedSort) => {
    return {type: SET_SELECTED_SORT, payload: selectedSort}
}

export const setSelectedGenreAction = (selectedGenre) => {
    return dispatch => {
        Promise.resolve(dispatch(setSelectedGenreSuccess(selectedGenre)))
            .finally(() => {
                dispatch(fetchMoviesAction())
            })
    }
}

const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

const fetchMovieByIdSuccess = (movie) => {
    return{
        type: FETCH_MOVIE_SUCCESS,
        payload: movie
    }
}

export const setSelectedGenreSuccess = (selectedGenre) => {
    return {type: SET_SELECTED_GENRE, payload: selectedGenre}
}

const requestStarted = () => {
    return {type: REQUEST_STARTED}
}

const requestFailure = (error) => {
    return {
        type: REQUEST_FAILURE,
        payload: error
    }
}

const requestSuccess = () => {
    return {type: REQUEST_SUCCESS}
}