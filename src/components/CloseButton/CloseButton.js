import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export function CloseButton({onClick}) {
    return (
        <button className='close' onClick={onClick}>
            <span>×</span>
        </button>
    )
}

CloseButton.propTypes = {
    onClick: PropTypes.func.isRequired
}