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
} from "./constants";

export function MovieForm({movie, okLabel, onSubmit}) {
    const [title, setTitle] = useState(''),
        [year, setYear] = useState(''),
        [movieUrl, setMovieUrl] = useState(''),
        [genre, setGenre] = useState(''),
        [overview, setOverview] = useState(''),
        [runtime, setRuntime] = useState('')

    useEffect(() => {
        if (movie) {
            setTitle(movie.title)
            setYear(movie.year)
            setMovieUrl(movie.movieUrl)
            setGenre(movie.genre)
            setOverview(movie.overview)
            setRuntime(movie.runtime)
        }
    }, [movie])

    const handleResetClick = useCallback(() => {
        if (movie) {
            setTitle(movie.title)
            setYear(movie.year)
            setMovieUrl(movie.movieUrl)
            setGenre(movie.genre)
            setOverview(movie.overview)
            setRuntime(movie.runtime)
        } else {
            setTitle('')
            setYear('')
            setMovieUrl('')
            setGenre('')
            setOverview('')
            setRuntime('')
        }
    }, [movie])

    return (
        <>
            <div>
                <FormGroup
                    label='TITLE'
                    value={title}
                    placeholder={TITLE_PLACEHOLDER}
                    onFieldChange={setTitle}
                    fieldName='title'
                />
                <FormGroup
                    type='date'
                    label='RELEASE DATE'
                    value={year}
                    placeholder={DATE_PLACEHOLDER}
                    onFieldChange={setYear}
                    fieldName='year'
                />
                <FormGroup
                    label='MOVIE URL'
                    value={movieUrl}
                    placeholder={MOVIE_URL_PLACEHOLDER}
                    onFieldChange={setMovieUrl}
                    fieldName='movieUrl'
                />
                <FormGroup
                    label='GENRE'
                    value={genre}
                    placeholder={GENRE_PLACEHOLDER}
                    onFieldChange={setGenre}
                    fieldName='genre'
                />
                <FormGroup
                    label='OVERVIEW'
                    value={overview}
                    placeholder={OVERVIEW_PLACEHOLDER}
                    onFieldChange={setOverview}
                    fieldName='overview'
                />
                <FormGroup
                    label='RUNTIME'
                    value={runtime}
                    placeholder={RUNTIME_PLACEHOLDER}
                    onFieldChange={setRuntime}
                    fieldName='runtime'
                />
            </div>

            <div className='movie-form-footer'>
                <BorderButton onClick={handleResetClick}>{RESET}</BorderButton>
                <RedButton
                    key='submit'
                    onClick={() => onSubmit({id: movie?.id, title, year, movieUrl, genre, overview, runtime})}
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