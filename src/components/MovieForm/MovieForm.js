import React, {useCallback, useEffect, useState} from 'react';
import './styles.css'
import {RedButton} from '../RedButton/RedButton';
import {FormGroup} from '../FormGroup/FormGroup';
import {BorderButton} from '../BorderButton/BorderButton';
import PropTypes from 'prop-types';
import {
    DATE_PLACEHOLDER,
    GENRE_PLACEHOLDER,
    MOVIE_URL_PLACEHOLDER,
    OVERVIEW_PLACEHOLDER,
    RESET,
    RUNTIME_PLACEHOLDER,
    TITLE_PLACEHOLDER
} from './constants';
import {FormDropdown} from '../FormDropdown/FormDropdown';
import {genres} from '../../layouts/MovieListPage/MovieConstants';

const movieDefault = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: ''
}

export function MovieForm({movie, okLabel, onSubmit}) {
    const [editMovie, setEditMovie] = useState(movieDefault)

    useEffect(() => {
        if (movie) {
            setEditMovie(movie)
        }
    }, [movie])

    const handleResetClick = useCallback(() => {
        if (movie) {
            setEditMovie(movie)
        } else {
            setEditMovie(movieDefault)
        }
    }, [movie])

    const changeFieldValue = useCallback((field, value) => {
        const newMovie = {...editMovie}
        newMovie[field] = value
        setEditMovie(newMovie)
    }, [editMovie])

    const changeFieldNumberValue = useCallback((field, value) => {
        const newMovie = {...editMovie}
        newMovie[field] = !Number.isNaN(value) ? Number.parseInt(value) : ''
        setEditMovie(newMovie)
    }, [editMovie])

    const handleCheckboxChange = useCallback((e) => {
        let newGenre = [...editMovie.genres]
        if (e.target.checked) {
            newGenre = [...newGenre, e.target.value]
        } else {
            newGenre = newGenre.filter(genre => genre !== e.target.value)
        }
        setEditMovie({...editMovie, genres: newGenre})
    }, [editMovie])

    return (
        <>
            <div>
                {!!movie &&
                <FormGroup
                    label='MOVIE ID'
                    value={editMovie.id}
                    isReadOnly={true}
                />
                }
                <FormGroup
                    label='TITLE'
                    value={editMovie.title}
                    placeholder={TITLE_PLACEHOLDER}
                    onFieldChange={changeFieldValue}
                    fieldName='title'
                />
                <FormGroup
                    type='date'
                    label='RELEASE DATE'
                    value={editMovie.release_date}
                    placeholder={DATE_PLACEHOLDER}
                    onFieldChange={changeFieldValue}
                    fieldName='release_date'
                />
                <FormGroup
                    label='MOVIE URL'
                    value={editMovie.poster_path}
                    placeholder={MOVIE_URL_PLACEHOLDER}
                    onFieldChange={changeFieldValue}
                    fieldName='poster_path'
                />
                <FormDropdown
                    label='GENRE'
                    value={editMovie.genres}
                    options={genres}
                    placeholder={GENRE_PLACEHOLDER}
                    onCheckboxChange={handleCheckboxChange}
                    fieldName='genres'
                />
                <FormGroup
                    label='OVERVIEW'
                    value={editMovie.overview}
                    placeholder={OVERVIEW_PLACEHOLDER}
                    onFieldChange={changeFieldValue}
                    fieldName='overview'
                />
                <FormGroup
                    label='RUNTIME'
                    value={editMovie.runtime}
                    placeholder={RUNTIME_PLACEHOLDER}
                    onFieldChange={changeFieldNumberValue}
                    fieldName='runtime'
                />
            </div>

            <div className='movie-form-footer'>
                <BorderButton onClick={handleResetClick}>{RESET}</BorderButton>
                <RedButton
                    key='submit'
                    onClick={() => onSubmit(editMovie)}
                >
                    {okLabel}
                </RedButton>
            </div>
        </>
    )
}

MovieForm.propTypes = {
    movie: PropTypes.object,
    okLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func
}