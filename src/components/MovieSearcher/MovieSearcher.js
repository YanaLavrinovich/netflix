import React from 'react';
import {SearchForm} from '../SearchForm/SearchForm';
import {FIND_YOUR_MOVIE, SEARCH} from './constants';

export function MovieSearcher() {
    return (
        <SearchForm
            title={FIND_YOUR_MOVIE}
            searchLabel={SEARCH}
        />
    )
}
