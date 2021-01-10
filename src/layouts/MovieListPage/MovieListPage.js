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
    const {movies, viewedMovie, isLoading, isNeedUpdateMovies, searchText} = moviesData

    useEffect(() => {
        if (!!isNeedUpdateMovies) {
            fetchMovies(selectedGenre, selectedSort, searchText)
        }
    }, [isNeedUpdateMovies, selectedGenre, selectedSort, fetchMovies, searchText])

    useEffect(() => {
        fetchMovies(selectedGenre, selectedSort, searchText)
    }, [selectedGenre, selectedSort, fetchMovies, searchText])


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
    fetchMovies: (selectedGenre, selectedSort, searchText) => dispatch(fetchMoviesAction(selectedGenre, selectedSort, searchText)),
    setVisiblePopupName: (popupName) => dispatch(setVisiblePopupNameAction(popupName)),
    setViewedMovie: (movieId) => dispatch(setViewedMovieAction(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieListPage)