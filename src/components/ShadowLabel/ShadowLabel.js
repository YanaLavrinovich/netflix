import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export function ShadowLabel({children}) {
    return (
        <label className='shadow-label'>{children}</label>
    )
}

ShadowLabel.propTypes = {
    children: PropTypes.string
}