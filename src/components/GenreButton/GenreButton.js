import React from 'react';
import './styles.css'
import {Button} from '../Button/Button';
import classNames from 'classnames'
import PropTypes from 'prop-types';

export function GenreButton({type, children, onClick, isActive}) {
    const buttonClass = classNames('genre-button', {active: isActive})
    return (
        <Button className={buttonClass} type={type} onClick={onClick}>{children}</Button>
    )
}

GenreButton.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool
}