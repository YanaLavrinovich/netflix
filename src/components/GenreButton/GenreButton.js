import React from 'react';
import './styles.css'
import {Button} from '../Button/Button';
import classNames from 'classnames'
import PropTypes from 'prop-types';

export function GenreButton({children, onClick, isActive}) {
    const buttonClass = classNames('genre-button', {active: isActive})
    return (
        <Button
            className={buttonClass}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

GenreButton.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool
}