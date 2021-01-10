import React from 'react';
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
import {Form, withFormik} from 'formik';
import * as Yup from 'yup';

const movieDefault = {
    title: '',
    release_date: '',
    poster_path: '',
    genres: [],
    overview: '',
    runtime: ''
}

const movieSchema = Yup.object().shape({
    title: Yup.string()
        .required('Required field'),
    release_date: Yup.date()
        .required('Required field'),
    poster_path: Yup.string()
        .required('Required field'),
    overview: Yup.string()
        .required('Required field'),
    runtime: Yup.number()
        .min(0, 'Min value is 0')
        .required('Required field'),
    genres: Yup.array()
        .min(1, 'Select at least one genre to proceed')
        .required('Required field')
});

const formikEnhancer = withFormik({
    mapPropsToValues: ({movie}) => {
        const editMovie = !!movie ? movie : movieDefault
        return {...editMovie}
    },
    validationSchema: movieSchema,
    handleSubmit: (values, {props}) => {
        props.onSubmit(values)
    }
})

function MovieForm({
                       movie,
                       okLabel,
                       handleReset,
                   }) {
    return <Form>
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
            <BorderButton onClick={handleReset}>{RESET}</BorderButton>
            <RedButton type='submit'>{okLabel}</RedButton>
        </div>
    </Form>
}

MovieForm.propTypes = {
    movie: PropTypes.object,
    okLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func
}

export default formikEnhancer(MovieForm)