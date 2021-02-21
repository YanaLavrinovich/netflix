import React, {useCallback} from 'react';
import {Title} from '../Title/Title';
import {SearchInput} from '../SearchInput/SearchInput';
import {RedButton} from '../RedButton/RedButton';
import './styles.css';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {REQUIRED_FIELD} from '../MovieForm/constants';

const searchSchema = Yup.object().shape({
    searchText: Yup.string()
        .required(REQUIRED_FIELD)
});

export function SearchForm({title, searchLabel, searchText, onSearchClick}) {
    const handleSubmitForm = useCallback((values) => {
        onSearchClick(values.searchText)
    }, [onSearchClick])

    return (
        <Formik
            initialValues={
                {
                    searchText: searchText
                }
            }
            validationSchema={searchSchema}
            onSubmit={handleSubmitForm}>
            {props => (
                <form className='search-form' onSubmit={props.handleSubmit}>
                    <Title>{title}</Title>
                    <div className='search-form-row'>
                        <SearchInput name='searchText'/>
                        <RedButton type='submit'>{searchLabel}</RedButton>
                    </div>
                </form>
            )}
        </Formik>
    )
}

SearchForm.propTypes = {
    title: PropTypes.string,
    searchLabel: PropTypes.string,
    searchText: PropTypes.string,
    onSearchClick: PropTypes.func.isRequired
}
SearchForm.defaultProps = {
    title: '',
    searchLabel: '',
    searchText: ''
}

