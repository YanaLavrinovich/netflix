import React from 'react';
import './styles.css'
import {Button} from '../Button/Button';
import PropTypes from 'prop-types';

export function ShadowButton({type, children, onClick}) {
    return (
        <Button className='shadow-button' type={type} onClick={onClick}>{children}</Button>
    )
}

ShadowButton.propTypes = {
    type: PropTypes.string,
    children: PropTypes.array,
    onClick: PropTypes.func
}