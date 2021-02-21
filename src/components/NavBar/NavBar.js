import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export function NavBar({children}) {
    return <div className='nav-bar'>{children}</div>
}

NavBar.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

NavBar.defaultProps = {
    children: []
}