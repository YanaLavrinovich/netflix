import React from 'react';
import {Title} from '../Title/Title';
import {SearchInput} from '../SearchInput/SearchInput';
import {RedButton} from '../RedButton/RedButton';
import './styles.css';
import PropTypes from 'prop-types';

export function SearchForm({title, searchLabel}) {
    return (
        <form className='search-form'>
            <Title>{title}</Title>
            <div className='search-form-row'>
                <SearchInput/>
                <RedButton>{searchLabel}</RedButton>
            </div>
        </form>
    )
}

SearchForm.propTypes = {
    title: PropTypes.string,
    searchLabel: PropTypes.string
}