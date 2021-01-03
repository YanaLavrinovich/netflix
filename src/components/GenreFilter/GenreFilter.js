import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import {GenreButton} from '../GenreButton/GenreButton';
import {GENRE_FILTERS} from './constants';

export function GenreFilter({selectedGenre, onGenreFilterChange}) {
    return (
        <div className='genre-filter'>
            {
                GENRE_FILTERS.map(genre => {
                    return <GenreButton
                        key={genre.id}
                        isActive={genre.id === selectedGenre}
                        onClick={() => onGenreFilterChange(genre.id)}
                    >
                        {genre.name}
                    </GenreButton>
                })
            }
        </div>
    )
}

GenreFilter.propTypes = {
    selectedGenre: PropTypes.string,
    onGenreFilterChange: PropTypes.func.isRequired
}