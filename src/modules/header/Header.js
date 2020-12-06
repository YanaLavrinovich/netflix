import React from 'react';
import './styles.css';
import {SearchContainer} from './movieSearcher/SearchContainer';
import {HeaderLogo} from './headerLogo/HeaderLogo';
import {AddMovieButton} from './addMovieButton/AddMovieButton';

export const Header = () => {
    return (
        <div className='header'>
            <div className='header-first-line'>
                <HeaderLogo/>
                <AddMovieButton/>
            </div>
           <SearchContainer/>
        </div>
    )
};