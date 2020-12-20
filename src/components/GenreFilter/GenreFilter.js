import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import {GenreButton} from '../GenreButton/GenreButton';

export function GenreFilter({genres, selectedGenre, onGenreFilterChange}) {
    return (
        <div className='genre-filter'>
            {
                genres?.map(genre => {
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
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    selectedGenre: PropTypes.string,
    onGenreFilterChange: PropTypes.func.isRequired
}