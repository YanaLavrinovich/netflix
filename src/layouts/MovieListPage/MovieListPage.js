import {ErrorBoundary} from '../../components/ErrorBoundary/ErrorBoundary';
import {Header} from '../../components/Header/Header';
import {MovieContainer} from '../../components/MovieContainer/MovieContainer';
import {Footer} from '../../components/Footer/Footer';
import {FooterLogo} from '../../components/FooterLogo/FooterLogo';
import {genres, movies, sortOptions} from './MovieConstants.js';
import React from 'react';
import {MoviePopup} from '../../components/MoviePopup/MoviePopup';
import {sortByField} from './MovieListUtil';


export class MovieListPage extends React.PureComponent {
    state = {
        showPopup: false,
        typePopup: 'add',
        selectedGenre: '1',
        selectedSort: 'year',
        movies: movies,
        editedMovie: {}
    };

    componentDidMount() {
        const sortedMovies = sortByField(this.state.movies, this.state.selectedSort)
        this.setState({movies: sortedMovies})
    }

    getFilteredMovies = () => {
        const filterType = genres.find(filter => filter.id === this.state.selectedGenre)?.name

        let filteredMovies = [...this.state.movies]
        if (filterType !== 'ALL') {
            filteredMovies = filteredMovies.filter(movie => movie.genre === filterType)
        }

        return sortByField(filteredMovies, this.state.selectedSort)
    }

    deleteMovie = id => {
        const newMovies = [...movies].filter(movie => movie.id !== id)
        this.setState({movies: newMovies})
    }

    addMovie = () => {

    }

    togglePopup = (type) => {
        this.setState({
            showPopup: !this.state.showPopup,
            typePopup: type || this.state.typePopup
        });
    }

    handleConfirmPopup = () => {
        //delete movie
        this.togglePopup()
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
                    <Header onAddMovieClick={this.togglePopup}/>
                    <MovieContainer
                        genres={genres}
                        selectedGenre={this.state.selectedGenre}
                        movies={this.getFilteredMovies()}
                        sortOptions={sortOptions}
                        selectedSort={this.state.selectedSort}
                        onGenreFilterChange={this.handleGenreFilterChange}
                        onSortChange={this.handleSortChange}
                        onMovieDelete={this.togglePopup}
                    />
                    <MoviePopup
                        type={this.state.typePopup}
                        onClose={this.togglePopup}
                        onConfirm={this.handleConfirmPopup}
                        isShow={this.state.showPopup}
                    />
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