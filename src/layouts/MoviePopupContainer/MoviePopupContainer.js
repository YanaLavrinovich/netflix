import React, {useCallback} from 'react';
import {AddMoviePopup} from '../../components/AddMoviePopup/AddMoviePopup';
import {EditMoviePopup} from '../../components/EditMoviePopup/EditMoviePopup';
import {DeleteMoviePopup} from '../../components/DeleteMoviePopup/DeleteMoviePopup';
import {
    createMovieAction,
    deleteMovieAction,
    setViewedMovieAction,
    updateMovieAction
} from '../../redux/actions/movies';
import {connect} from 'react-redux';
import {setVisiblePopupNameAction} from '../../redux/actions/popups';
import {POPUP_TYPE} from './constants';

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
            setViewedMovie(null)
            setViewedMovie(newMovie)
        }
    }, [viewedMovie, updateMovie, setVisiblePopupName, setViewedMovie])

    const handleMovieDelete = useCallback(() => {
        deleteMovie(currentMovieId)
        setVisiblePopupName('')
        setViewedMovie(viewedMovie?.id !== currentMovieId ? viewedMovie : null)
    }, [viewedMovie, currentMovieId, deleteMovie, setVisiblePopupName, setViewedMovie])

    return <>
        {visiblePopupName === POPUP_TYPE.ADD &&
        <AddMoviePopup
            onSubmit={handleSubmitMovie}
            onClose={() => setVisiblePopupName('')}
        />}

        {visiblePopupName === POPUP_TYPE.EDIT &&
        <EditMoviePopup
            movie={movies.find(movie => movie.id === currentMovieId)}
            onSubmit={handleMovieEditSave}
            onClose={() => setVisiblePopupName('')}
        />}

        {visiblePopupName === POPUP_TYPE.DELETE &&
        <DeleteMoviePopup
            onConfirm={handleMovieDelete}
            onClose={() => setVisiblePopupName('')}
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
    setViewedMovie: (movieId) => dispatch(setViewedMovieAction(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviePopupContainer)