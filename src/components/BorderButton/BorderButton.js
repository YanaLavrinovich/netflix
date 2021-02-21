import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export function BorderButton({children, onClick}) {
    return (
        <button
            key='reset'
            className='border-button'
            onClick={onClick}
        >
            {children}
        </button>
    )
}

BorderButton.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

BorderButton.defaultProps = {
    children: ''
}