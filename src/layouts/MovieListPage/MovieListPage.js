import {ErrorBoundary} from '../../components/ErrorBoundary/ErrorBoundary';
import {Header} from '../../components/Header/Header';
import {MovieContainer} from '../../components/MovieContainer/MovieContainer';
import {Footer} from '../../components/Footer/Footer';
import {FooterLogo} from '../../components/FooterLogo/FooterLogo';
import {genres, movies, sortOptions} from './MovieConstants.js';
import React from 'react';
import {getRandomIntInclusive, sortByField} from './MovieListUtil';
import {AddMoviePopup} from "../../components/AddMoviePopup/AddMoviePopup";
import {DeleteMoviePopup} from "../../components/DeleteMoviePopup/DeleteMoviePopup";
import {EditMoviePopup} from "../../components/EditMoviePopup/EditMoviePopup";


export class MovieListPage extends React.PureComponent {
    state = {
        visiblePopupName: '',
        selectedGenre: 'all',
        selectedSort: 'year',
        movies: movies,
        currentMovieId: ''
    };

    getFilteredMovies = () => {
        const filterType = genres.find(filter => filter.id === this.state.selectedGenre)?.name

        let filteredMovies = [...this.state.movies]
        if (filterType !== 'ALL') {
            filteredMovies = filteredMovies.filter(movie => movie.genre === filterType)
        }

        return sortByField(filteredMovies, this.state.selectedSort)
    }

    handleOnEditClick = (id) => {
        this.setCurrentMovieId(id)
        this.togglePopup('edit')
    }

    handleMovieEditSubmit = (movie) => {
        const editedMovies = this.state.movies
        const index = editedMovies.findIndex(m => m.id === movie.id)
        this.setState({
            movies: [...editedMovies.slice(0, index), movie, ...editedMovies.slice(index + 1, editedMovies.length)]
        })
        this.togglePopup('')
    }

    handleMovieDelete = () => {
        const editedMovies = this.state.movies
        const index = editedMovies.findIndex(m => m.id === this.state.currentMovieId)
        this.setState({
            movies: [...editedMovies.slice(0, index), ...editedMovies.slice(index + 1, editedMovies.length)]
        })
        this.togglePopup('')
    }

    setCurrentMovieId = (id) => {
        this.setState({currentMovieId: id})
    }

    togglePopup = (popupName) => {
        this.setState({
            visiblePopupName: popupName
        });
    }

    handleOnDeleteClick = (id) => {
        this.setCurrentMovieId(id)
        this.togglePopup('delete')
    }

    handleSubmitMovie = (movie) => {
        movie.id = getRandomIntInclusive(1, 1000000)
        this.setState({movies: [...this.state.movies, movie]})
        this.togglePopup('')
    }

    handleSortChange = (e) => {
        this.setState({selectedSort: e.target.value})
    }

    handleGenreFilterChange = (type) => {
        this.setState({selectedGenre: type})
    }

    render() {
        return (
            <>
                <ErrorBoundary>
                    <Header onAddMovieClick={() => this.togglePopup('add')}/>
                    <MovieContainer
                        genres={genres}
                        selectedGenre={this.state.selectedGenre}
                        movies={this.getFilteredMovies()}
                        sortOptions={sortOptions}
                        selectedSort={this.state.selectedSort}
                        onGenreFilterChange={this.handleGenreFilterChange}
                        onSortChange={this.handleSortChange}
                        onMovieDelete={this.handleOnDeleteClick}
                        onMovieEdit={this.handleOnEditClick}
                    />
                    {this.state.visiblePopupName === 'add' &&
                    <AddMoviePopup
                        editedMovie={this.state.editedMovie}
                        onSubmit={this.handleSubmitMovie}
                        onClose={() => this.togglePopup('')}/>
                    }
                    {this.state.visiblePopupName === 'edit' &&
                    <EditMoviePopup
                        movie={this.state.movies.find(movie => movie.id === this.state.currentMovieId)}
                        onSubmit={this.handleMovieEditSubmit}
                        onClose={() => this.togglePopup('')}/>
                    }
                    {this.state.visiblePopupName === 'delete' &&
                    <DeleteMoviePopup
                        onConfirm={this.handleMovieDelete}
                        onClose={() => this.togglePopup('')}/>
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
}