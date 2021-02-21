import React, {useCallback} from 'react';
import loadable from '@loadable/component'
import {
    createMovieAction,
    deleteMovieAction,
    fetchMovieByIdAction,
    updateMovieAction
} from '../../redux/actions/movies';
import {connect} from 'react-redux';
import {setVisiblePopupNameAction} from '../../redux/actions/popups';
import {POPUP_TYPE} from './constants';

const AddMoviePopup = loadable(() => import('../../components/AddMoviePopup/AddMoviePopup'))
const EditMoviePopup = loadable(() => import('../../components/EditMoviePopup/EditMoviePopup'))
const DeleteMoviePopup = loadable(() => import('../../components/DeleteMoviePopup/DeleteMoviePopup'))

function MoviePopupContainer({
                                 currentMovieId,
                                 createMovie,
                                 updateMovie,
                                 deleteMovie,
                                 setVisiblePopupName,
                                 setViewedMovie,
                                 movies,
                                 viewedMovie,
                                 visiblePopupName
                             }) {
    const handleSubmitMovie = useCallback((movie) => {
        createMovie(movie)
        setVisiblePopupName('')
    }, [createMovie, setVisiblePopupName])

    const handleMovieEditSave = useCallback((movie) => {
        const newMovie = {...movie, tagline: movie.tagline === '' ? undefined : movie.tagline} //validation on tagline but no popup's field to change value
        updateMovie(newMovie)
        setVisiblePopupName('')

        if (newMovie.id === viewedMovie?.id) {
            setViewedMovie(newMovie)
        }
    }, [viewedMovie, updateMovie, setVisiblePopupName, setViewedMovie])

    const handleMovieDelete = useCallback(() => {
        deleteMovie(currentMovieId)
        setVisiblePopupName('')
        setViewedMovie(viewedMovie?.id !== currentMovieId ? viewedMovie : null)
    }, [viewedMovie, currentMovieId, deleteMovie, setVisiblePopupName, setViewedMovie])

    const handleClosePopup = useCallback(() => {
        setVisiblePopupName('')
    }, [setVisiblePopupName])

    const findMovieById = useCallback(() => {
        return movies.find(movie => movie.id === currentMovieId)
    }, [movies, currentMovieId])

    return <>
        {visiblePopupName === POPUP_TYPE.ADD &&
        <AddMoviePopup
            onSubmit={handleSubmitMovie}
            onClose={handleClosePopup}
        />}

        {visiblePopupName === POPUP_TYPE.EDIT &&
        <EditMoviePopup
            movie={findMovieById}
            onSubmit={handleMovieEditSave}
            onClose={handleClosePopup}
        />}

        {visiblePopupName === POPUP_TYPE.DELETE &&
        <DeleteMoviePopup
            onConfirm={handleMovieDelete}
            onClose={handleClosePopup}
        />}
    </>
}

const mapStateToProps = state => ({
    viewedMovie: state.movies.viewedMovie,
    movies: state.movies.movies,
    visiblePopupName: state.popups.visiblePopupName
})

const mapDispatchToProps = dispatch => ({
    createMovie: (newMovie) => dispatch(createMovieAction(newMovie)),
    updateMovie: (updateMovie) => dispatch(updateMovieAction(updateMovie)),
    deleteMovie: (movieId) => dispatch(deleteMovieAction(movieId)),
    setVisiblePopupName: (popupName) => dispatch(setVisiblePopupNameAction(popupName)),
    setViewedMovie: (movieId) => dispatch(fetchMovieByIdAction(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePopupContainer)