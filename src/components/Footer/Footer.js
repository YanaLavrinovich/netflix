import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export function Footer({children}) {
    return (
        <div className='footer'>{children}</div>
    )
}

Footer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.string])
}