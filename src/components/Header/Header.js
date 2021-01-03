import React from 'react';
import './styles.css';
import {MovieSearcher} from '../MovieSearcher/MovieSearcher';
import {HeaderLogo} from '../HeaderLogo/HeaderLogo';
import {ShadowButton} from '../ShadowButton/ShadowButton';
import {NavBar} from '../NavBar/NavBar';
import PropTypes from 'prop-types';
import {MagnifierButton} from '../MagnifierButton/MagnifierButton';
import {MovieViewer} from '../MovieViewer/MovieViewer';
import {NETFLIX, PLUS_ADD_MOVIE, ROULETTE} from './constants';

export const Header = ({viewedMovie, onAddMovieClick, onMagnifierClick}) => {
    return (
        <div className='header'>
            <NavBar>
                <HeaderLogo><b>{NETFLIX}</b>{ROULETTE}</HeaderLogo>

                {viewedMovie?.id
                    ? <MagnifierButton onClick={onMagnifierClick}/>
                    : <ShadowButton onClick={onAddMovieClick}>{PLUS_ADD_MOVIE}</ShadowButton>}
            </NavBar>

            <div className='header-container'>
                {viewedMovie?.id
                    ? <MovieViewer movie={viewedMovie}/>
                    : <MovieSearcher/>}
            </div>

        </div>
    )
};

Header.propTypes = {
    viewedMovie: PropTypes.object,
    onAddMovieClick: PropTypes.func,
    onMagnifierClick: PropTypes.func
}