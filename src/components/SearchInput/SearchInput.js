import React from 'react';
import './styles.css'
import {SEARCH_INPUT_PLACEHOLDER} from './constants';
import PropTypes from 'prop-types';

export function SearchInput({name, value, onChange}) {
    return (
        <input
            id={name}
            className='search-input'
            placeholder={SEARCH_INPUT_PLACEHOLDER}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}

SearchInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string
}