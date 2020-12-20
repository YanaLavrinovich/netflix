import {ErrorBoundary} from '../../components/ErrorBoundary/ErrorBoundary';
import {Header} from '../../components/Header/Header';
import {MovieContainer} from '../../components/MovieContainer/MovieContainer';
import {Footer} from '../../components/Footer/Footer';
import {FooterLogo} from '../../components/FooterLogo/FooterLogo';
import {
    GENRE_ALL,
    genres,
    moviesFromAPI,
    NETFLIX,
    POPUP_TYPE,
    ROULETTE,
    sortOptions,
    YEAR_SORT
} from './MovieConstants';
import React, {useCallback, useState} from 'react';
import {AddMoviePopup} from '../../components/AddMoviePopup/AddMoviePopup';
import {DeleteMoviePopup} from '../../components/DeleteMoviePopup/DeleteMoviePopup';
import {EditMoviePopup} from '../../components/EditMoviePopup/EditMoviePopup';
import {getRandomIntInclusive} from './MovieListUtil';
import {useFilteredMovies} from '../../hooks/useFilteredMovies';


export function MovieListPage() {
    const [visiblePopupName, setVisiblePopupName] = useState(''),
        [selectedGenre, setSelectedGenre] = useState(GENRE_ALL),
        [selectedSort, setSelectedSort] = useState(YEAR_SORT),
        [movies, setMovies] = useState(moviesFromAPI),
        [currentMovieId, setCurrentMovieId] = useState(''),
        [viewedMovie, setViewedMovie] = useState({})

    const handleOnDeleteClick = useCallback((id) => {
        setCurrentMovieId(id)
        setVisiblePopupName(POPUP_TYPE.DELETE)
    }, [])

    const handleOnEditClick = useCallback((id) => {
        setCurrentMovieId(id)
        setVisiblePopupName(POPUP_TYPE.EDIT)
    }, [])

    const handleMovieClick = useCallback((movieId) => {
        const movie = movies.find(m => m.id === movieId)
        setViewedMovie(movie)
    }, [movies])

    const handleSubmitMovie = useCallback((movie) => {
        movie.id = getRandomIntInclusive(1, 1000000)
        setMovies([...movies, movie])
        setVisiblePopupName('')
    }, [movies])

    const handleMovieEditSave = useCallback((movie) => {
        const editedMovies = movies
        const index = editedMovies.findIndex(m => m.id === movie.id)
        setMovies([...editedMovies.slice(0, index), movie, ...editedMovies.slice(index + 1, editedMovies.length)])
        setVisiblePopupName('')

        if (viewedMovie?.id === movie.id) {
            setViewedMovie({})
            setViewedMovie(movie)
        }
    }, [viewedMovie, movies])

    const handleMovieDelete = useCallback(() => {
        const editedMovies = movies
        const index = editedMovies.findIndex(m => m.id === currentMovieId)
        setMovies([...editedMovies.slice(0, index), ...editedMovies.slice(index + 1, editedMovies.length)])
        setVisiblePopupName('')
        setViewedMovie(viewedMovie?.id !== currentMovieId ? viewedMovie : {})
    }, [currentMovieId, movies, viewedMovie])

    return (
        <>
            <ErrorBoundary>
                <Header
                    viewedMovie={viewedMovie}
                    onAddMovieClick={() => setVisiblePopupName(POPUP_TYPE.ADD)}
                    onMagnifierClick={() => setViewedMovie({})}
                />
                <MovieContainer
                    genres={genres}
                    selectedGenre={selectedGenre}
                    movies={useFilteredMovies({movies, selectedGenre, selectedSort})}
                    sortOptions={sortOptions}
                    selectedSort={selectedSort}
                    onGenreFilterChange={setSelectedGenre}
                    onSortChange={setSelectedSort}
                    onMovieDelete={handleOnDeleteClick}
                    onMovieEdit={handleOnEditClick}
                    onMovieClick={handleMovieClick}
                />
                {visiblePopupName === POPUP_TYPE.ADD &&
                <AddMoviePopup
                    onSubmit={handleSubmitMovie}
                    onClose={() => setVisiblePopupName('')}/>
                }
                {visiblePopupName === POPUP_TYPE.EDIT &&
                <EditMoviePopup
                    movie={movies.find(movie => movie.id === currentMovieId)}
                    onSubmit={handleMovieEditSave}
                    onClose={() => setVisiblePopupName('')}/>
                }
                {visiblePopupName === POPUP_TYPE.DELETE &&
                <DeleteMoviePopup
                    onConfirm={handleMovieDelete}
                    onClose={() => setVisiblePopupName('')}/>
                }
            </ErrorBoundary>
            <Footer>
                <FooterLogo>
                    <b>{NETFLIX}</b>{ROULETTE}
                </FooterLogo>
            </Footer>
        </>
    );
}