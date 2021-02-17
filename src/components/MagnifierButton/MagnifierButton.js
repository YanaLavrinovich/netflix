import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export default function MagnifierButton({onClick}) {
    return (
        <button className='magnifier-button' onClick={onClick}/>
    )
}

MagnifierButton.propTypes = {
    onClick: PropTypes.func
}