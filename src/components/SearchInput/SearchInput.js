import React from 'react';
import './styles.css'
import {SEARCH_INPUT_PLACEHOLDER} from './constants';

export function SearchInput() {
    return (
        <input
            className='search-input'
            placeholder={SEARCH_INPUT_PLACEHOLDER}
            name='search'
        />
    )
}