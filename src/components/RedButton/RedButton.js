import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export function RedButton({children, onClick, type}) {
    return (
        <button
            className='red-button'
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

RedButton.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
}

RedButton.defaultProps = {
    children: '',
    type: '',
    onClick: null
}