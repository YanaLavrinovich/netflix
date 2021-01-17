import React from 'react';
import {SearchForm} from '../SearchForm/SearchForm';
import {FIND_YOUR_MOVIE, SEARCH} from './constants';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

export function MovieSearcher({onSearchClick}) {
    const {query} = useParams()

    return (
        <SearchForm
            title={FIND_YOUR_MOVIE}
            searchLabel={SEARCH}
            searchText={query}
            onSearchClick={onSearchClick}
        />
    )
}

MovieSearcher.propTypes = {
    onSearchClick: PropTypes.func
}
