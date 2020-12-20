import {ErrorBoundary} from '../../components/ErrorBoundary/ErrorBoundary';
import {Header} from '../../components/Header/Header';
import {MovieContainer} from '../../components/MovieContainer/MovieContainer';
import {Footer} from '../../components/Footer/Footer';
import {FooterLogo} from '../../components/FooterLogo/FooterLogo';
import {genres, moviesFromAPI, sortOptions} from './MovieConstants';
import React, {useCallback, useEffect, useState} from 'react';
import {AddMoviePopup} from '../../components/AddMoviePopup/AddMoviePopup';
import {DeleteMoviePopup} from '../../components/DeleteMoviePopup/DeleteMoviePopup';
import {EditMoviePopup} from '../../components/EditMoviePopup/EditMoviePopup';
import {getRandomIntInclusive, sortByField} from './MovieListUtil';


export function MovieListPage() {
    const [visiblePopupName, setVisiblePopupName] = useState(''),
        [selectedGenre, setSelectedGenre] = useState('all'),
        [selectedSort, setSelectedSort] = useState('year'),
        [movies, setMovies] = useState(moviesFromAPI),
        [filteredMovies, setFilteredMovies] = useState([]),
        [currentMovieId, setCurrentMovieId] = useState(''),
        [viewedMovie, setViewedMovie] = useState({})

    useEffect(() => {
        const filterType = genres.find(filter => filter.id === selectedGenre)?.name
        let newFilteredMovies = [...movies]
        if (filterType !== 'ALL') {
            newFilteredMovies = newFilteredMovies.filter(movie => movie.genre === filterType)
        }
        setFilteredMovies(sortByField(newFilteredMovies, selectedSort))
    }, [movies, selectedGenre, selectedSort])

    const handleOnDeleteClick = useCallback((id) => {
        setCurrentMovieId(id)
        setVisiblePopupName('delete')
    }, [])

    const handleOnEditClick = useCallback((id) => {
        setCurrentMovieId(id)
        setVisiblePopupName('edit')
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
    }, [movies])

    const handleMovieDelete = useCallback(() => {
        const editedMovies = movies
        const index = editedMovies.findIndex(m => m.id === currentMovieId)
        setMovies([...editedMovies.slice(0, index), ...editedMovies.slice(index + 1, editedMovies.length)])
        setVisiblePopupName('')
    }, [currentMovieId, movies])

    return (
        <>
            <ErrorBoundary>
                <Header
                    viewedMovie={viewedMovie}
                    onAddMovieClick={() => setVisiblePopupName('add')}
                    onMagnifierClick={() => setViewedMovie({})}
                />
                <MovieContainer
                    genres={genres}
                    selectedGenre={selectedGenre}
                    movies={filteredMovies}
                    sortOptions={sortOptions}
                    selectedSort={selectedSort}
                    onGenreFilterChange={setSelectedGenre}
                    onSortChange={setSelectedSort}
                    onMovieDelete={handleOnDeleteClick}
                    onMovieEdit={handleOnEditClick}
                    onMovieClick={handleMovieClick}
                />
                {visiblePopupName === 'add' &&
                <AddMoviePopup
                    onSubmit={handleSubmitMovie}
                    onClose={() => setVisiblePopupName('')}/>
                }
                {visiblePopupName === 'edit' &&
                <EditMoviePopup
                    movie={movies.find(movie => movie.id === currentMovieId)}
                    onSubmit={handleMovieEditSave}
                    onClose={() => setVisiblePopupName('')}/>
                }
                {visiblePopupName === 'delete' &&
                <DeleteMoviePopup
                    onConfirm={handleMovieDelete}
                    onClose={() => setVisiblePopupName('')}/>
                }
            </ErrorBoundary>
            <Footer>
                <FooterLogo>
                    <b>netflix</b>roulette
                </FooterLogo>
            </Footer>
        </>
    );
}