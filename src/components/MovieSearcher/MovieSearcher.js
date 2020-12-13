import React from 'react';
import './styles.css';
import {SearchForm} from '../SearchForm/SearchForm';

export function MovieSearcher() {
    return (
        <div className='movie-searcher'>
            <SearchForm
                title='FIND YOUR MOVIE'
                searchLabel='SEARCH'
            />
        </div>
    )
}
