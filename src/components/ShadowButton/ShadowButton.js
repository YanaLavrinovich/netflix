import React from 'react';
import './styles.css'
import {Button} from '../Button/Button';
import PropTypes from 'prop-types';

export function ShadowButton({children, onClick}) {
    return (
        <Button className='shadow-button' onClick={onClick}>{children}</Button>
    )
}

ShadowButton.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
}