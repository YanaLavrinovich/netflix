import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export function Footer({children, className}) {
    return (
        <div className={classNames('footer', className)}>{children}</div>
    )
}

Footer.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.element, PropTypes.string])
}