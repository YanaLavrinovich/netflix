import React from 'react';
import './styles.css';
import {MovieSearcher} from '../MovieSearcher/MovieSearcher';
import {HeaderLogo} from '../HeaderLogo/HeaderLogo';
import {ShadowButton} from '../ShadowButton/ShadowButton';
import {NavBar} from '../NavBar/NavBar';
import PropTypes from 'prop-types';

export const Header = ({onAddMovieClick}) => {
    return (
        <div className='header'>
            <NavBar>
                <HeaderLogo><b>netflix</b>roulette</HeaderLogo>
                <ShadowButton onClick={onAddMovieClick}>+ ADD MOVIE</ShadowButton>
            </NavBar>
            <MovieSearcher/>
        </div>
    )
};

Header.propTypes = {
    onAddMovieClick: PropTypes.func
}