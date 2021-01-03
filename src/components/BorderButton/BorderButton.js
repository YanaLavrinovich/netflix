import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {Button} from '../Button/Button';

export function BorderButton({children, onClick}) {
    return (
        <Button
            key='reset'
            className='border-button'
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

BorderButton.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func.isRequired
}