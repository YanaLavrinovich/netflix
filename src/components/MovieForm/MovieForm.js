import React from 'react';
import './styles.css'
import {RedButton} from '../RedButton/RedButton';
import {FormGroup} from '../FormGroup/FormGroup';
import {BorderButton} from '../BorderButton/BorderButton';
import PropTypes from 'prop-types';
import {
    AT_LEAST_ONE_GENRE,
    DATE_PLACEHOLDER,
    GENRE_PLACEHOLDER,
    MIN_VALUE_IS_ZERO,
    MOVIE_URL_PLACEHOLDER,
    OVERVIEW_PLACEHOLDER,
    REQUIRED_FIELD,
    RESET,
    RUNTIME_PLACEHOLDER,
    TITLE_PLACEHOLDER,
    WRONG_URL
} from './constants';
import {FormDropdown} from '../FormDropdown/FormDropdown';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {genres} from '../../layouts/MovieListPage/constants';

const movieDefault = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: ''
};

const movieSchema = Yup.object().shape({
    title: Yup.string()
        .required(REQUIRED_FIELD),
    release_date: Yup.date()
        .required(REQUIRED_FIELD),
    poster_path: Yup.string()
        .matches('https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)', WRONG_URL)
        .required(REQUIRED_FIELD),
    overview: Yup.string()
        .required(REQUIRED_FIELD),
    runtime: Yup.number()
        .min(0, MIN_VALUE_IS_ZERO)
        .required(REQUIRED_FIELD),
    genres: Yup.array()
        .min(1, AT_LEAST_ONE_GENRE)
        .required(REQUIRED_FIELD)
});

export function MovieForm({
                              movie,
                              okLabel,
                              onSubmit
                          }) {
    return <Formik
        initialValues={movie || movieDefault}
        onSubmit={(values) => {
            onSubmit(values)
        }}
        validationSchema={movieSchema}
    >
        {props => (
            <Form>
                {!!movie &&
                <FormGroup
                    name='id'
                    label='MOVIE ID'
                    isReadOnly={true}
                />
                }
                <FormGroup
                    name='title'
                    label='TITLE'
                    placeholder={TITLE_PLACEHOLDER}
                />
                <FormGroup
                    name='release_date'
                    type='date'
                    label='RELEASE DATE'
                    placeholder={DATE_PLACEHOLDER}
                />
                <FormGroup
                    name='poster_path'
                    label='MOVIE URL'
                    placeholder={MOVIE_URL_PLACEHOLDER}
                />
                <FormDropdown
                    name='genres'
                    label='GENRE'
                    options={genres}
                    placeholder={GENRE_PLACEHOLDER}
                />
                <FormGroup
                    name='overview'
                    label='OVERVIEW'
                    placeholder={OVERVIEW_PLACEHOLDER}
                />
                <FormGroup
                    name='runtime'
                    type='number'
                    label='RUNTIME'
                    placeholder={RUNTIME_PLACEHOLDER}
                />
                <div className='movie-form-footer'>
                    <BorderButton onClick={props.handleReset}>{RESET}</BorderButton>
                    <RedButton type='submit'>{okLabel}</RedButton>
                </div>
            </Form>
        )}
    </Formik>
}

MovieForm.propTypes = {
    movie: PropTypes.object,
    okLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
}

MovieForm.defaultProps = {
    movie: null
}