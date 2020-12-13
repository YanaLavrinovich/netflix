import React from 'react';
import './styles.css'
import classNames from 'classnames'
import PropTypes from 'prop-types';

export function Button({type, className, children, onClick}) {
    return (
        <button className={classNames('button', className)} onClick={() => onClick(type)}>{children}</button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired
}