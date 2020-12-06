import React from 'react';
import {genres, movies, sortOptions} from './MovieConstants';
import './styles.css';
import {FilterContainer} from './movieFilters/FilterContainer';
import {MovieSearchContainer} from './movieSearch/MovieSearchContainer';

export class MovieContainer extends React.PureComponent {
    render() {
        return (
            <div className="movies-container">
                <FilterContainer genres={genres} sortOptions={sortOptions}/>
                <MovieSearchContainer movieListSize={movies.length} movies={movies}/>
            </div>
        )
    }
}