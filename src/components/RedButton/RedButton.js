import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export function RedButton({children, onClick}) {
    return (
        <button className='red-button' onClick={onClick}>{children}</button>
    )
}

RedButton.propTypes = {
    children: PropTypes.array,
    onClick: PropTypes.func
}