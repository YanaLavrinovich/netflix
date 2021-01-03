import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export function Title({children}) {
    return (
        <h1 className='title'>{children}</h1>
    )
}

Title.propTypes = {
    children: PropTypes.string
}