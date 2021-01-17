import {ErrorBoundary} from '../../components/ErrorBoundary/ErrorBoundary';
import Header from '../../components/Header/Header';
import {MovieContainer} from '../../components/MovieContainer/MovieContainer';
import {Footer} from '../../components/Footer/Footer';
import {FooterLogo} from '../../components/FooterLogo/FooterLogo';
import {NETFLIX, ROULETTE} from '../common/constants';
import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
    fetchMoviesAction,
    setSearchTextAction,
    setSelectedGenreAction,
    setSelectedSortAction
} from '../../redux/actions/movies';
import {setVisiblePopupNameAction} from '../../redux/actions/popups';
import MoviePopupContainer from '../MoviePopupContainer/MoviePopupContainer';
import {POPUP_TYPE} from '../MoviePopupContainer/constants';
import {useHistory, useParams} from 'react-router-dom';
import {sortOptions} from "./constants";

function MovieListPage(props) {
    const [currentMovieId, setCurrentMovieId] = useState('')
    const history = useHistory()

    const {
        moviesData,
        setVisiblePopupName,
        setSelectedGenre,
        setSelectedSort,
        setSearchText
    } = props
    const {
        movies,
        viewedMovie,
        isLoading,
        totalAmount,
        selectedSort,
        selectedGenre
    } = moviesData

    const {query} = useParams()
    useEffect(() => {
        !!query && setSearchText(query)
    }, [setSearchText, query])

    const handleMovieClick = useCallback((movieId) => {
        history.push(`/film/${movieId}`)
    }, [history])

    const handleSearchClick = useCallback((searchText) => {
        history.push(`/search/${searchText}`)
    }, [history])

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
                    onMagnifierClick={() => history.push('/')}
                    onSearchClick={handleSearchClick}
                />
                <MovieContainer
                    isLoading={isLoading}
                    selectedGenre={selectedGenre}
                    totalAmount={totalAmount}
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
    fetchMovies: () => dispatch(fetchMoviesAction()),
    setVisiblePopupName: (popupName) => dispatch(setVisiblePopupNameAction(popupName)),
    setSelectedGenre: (selectedGenre) => dispatch(setSelectedGenreAction(selectedGenre)),
    setSelectedSort: (selectedSort) => dispatch(setSelectedSortAction(selectedSort)),
    setSearchText: (searchText) => dispatch(setSearchTextAction(searchText))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieListPage)