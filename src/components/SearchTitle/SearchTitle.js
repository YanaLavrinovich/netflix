import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export function SearchTitle({children}) {
    return (
        <h1 className='search-title'>{children}</h1>
    )
}

SearchTitle.propTypes = {
    children: PropTypes.string
}