import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export function HeaderLogo({children}) {
    return (
        <h2 className='header-logo'>{children}</h2>
    )
}

HeaderLogo.propTypes = {
    children: PropTypes.array
}