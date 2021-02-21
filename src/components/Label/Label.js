import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';

export function Label({children}) {
    return (
        <div className='label'>
            <p>{children}</p>
        </div>
    )
}

Label.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string])
}

Label.defaultProps = {
    children: ''
}