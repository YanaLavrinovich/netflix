import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export function FooterLogo({children}) {
    return (
        <h2 className='footer-logo'>{children}</h2>
    )
}

FooterLogo.propTypes = {
    children: PropTypes.array
}