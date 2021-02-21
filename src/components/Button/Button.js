import React from 'react';
import './styles.css'
import classNames from 'classnames'
import PropTypes from 'prop-types';

export function Button({className, children, onClick}) {
    return (
        <button
            className={classNames('button', className)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    className: '',
    children: ''
}