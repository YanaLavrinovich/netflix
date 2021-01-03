import {ErrorBoundary} from '../../components/ErrorBoundary/ErrorBoundary';
import {Header} from '../../components/Header/Header';
import {MovieContainer} from '../../components/MovieContainer/MovieContainer';
import {Footer} from '../../components/Footer/Footer';
import {FooterLogo} from '../../components/FooterLogo/FooterLogo';
import {DATE_SORT, GENRE_ALL, NETFLIX, ROULETTE, sortOptions} from './MovieConstants';
import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {fetchMoviesAction, setViewedMovieAction} from '../../redux/actions/movies';
import {setVisiblePopupNameAction} from '../../redux/actions/popups';
import MoviePopupContainer from '../MoviePopupContainer/MoviePopupContainer';
import {POPUP_TYPE} from '../MoviePopupContainer/constants';

function MovieListPage(props) {
    const [currentMovieId, setCurrentMovieId] = useState(''),
        [selectedGenre, setSelectedGenre] = useState(GENRE_ALL),
        [selectedSort, setSelectedSort] = useState(DATE_SORT)

    const {moviesData, fetchMovies, setVisiblePopupName, setViewedMovie} = props
    const {movies, viewedMovie, isLoading, isNeedUpdateMovies} = moviesData

    useEffect(() => {
        if (!!isNeedUpdateMovies) {
            fetchMovies(selectedGenre, selectedSort)
        }
    }, [isNeedUpdateMovies, selectedGenre, selectedSort, fetchMovies])

    useEffect(() => {
        fetchMovies(selectedGenre, selectedSort)
    }, [selectedGenre, selectedSort, fetchMovies])


    const handleMovieClick = useCallback((movieId) => {
        const movie = movies.find(m => m.id === movieId)
        setViewedMovie(movie)
    }, [movies, setViewedMovie])

    const handlePopupOpen = useCallback((popupName) => (id) => {
        setCurrentMovieId(id)
        setVisiblePopupName(popupName)
    }, [setVisiblePopupName])

    return (
        <>
            <ErrorBoundary>
                <Header
                    viewedMovie={viewedMovie}
                    onAddMovieClick={() => setVisiblePopupName(POPUP_TYPE.ADD)}
                    onMagnifierClick={() => setViewedMovie(null)}
                />
                <MovieContainer
                    isLoading={isLoading}
                    selectedGenre={selectedGenre}
                    movies={movies}
                    sortOptions={sortOptions}
                    selectedSort={selectedSort}
                    onGenreFilterChange={setSelectedGenre}
                    onSortChange={setSelectedSort}
                    onMovieDelete={handlePopupOpen(POPUP_TYPE.DELETE)}
                    onMovieEdit={handlePopupOpen(POPUP_TYPE.EDIT)}
                    onMovieClick={handleMovieClick}
                />
                <MoviePopupContainer
                    currentMovieId={currentMovieId}
                />
            </ErrorBoundary>
            <Footer>
                <FooterLogo>
                    <b>{NETFLIX}</b>{ROULETTE}
                </FooterLogo>
            </Footer>
        </>
    );
}

const mapStateToProps = state => ({
    moviesData: state.movies
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: (selectedGenre, selectedSort) => dispatch(fetchMoviesAction(selectedGenre, selectedSort)),
    setVisiblePopupName: (popupName) => dispatch(setVisiblePopupNameAction(popupName)),
    setViewedMovie: (movieId) => dispatch(setViewedMovieAction(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieListPage)