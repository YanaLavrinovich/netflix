import React from 'react';
import {SearchTitle} from '../SearchTitle/SearchTitle';
import {SearchInput} from '../SearchInput/SearchInput';
import {RedButton} from '../RedButton/RedButton';
import './styles.css';
import PropTypes from 'prop-types';

export const SearchForm = ({title, searchLabel}) => {
    return (
        <form className='search-form'>
            <SearchTitle>{title}</SearchTitle>
            <div className='search-form-row'>
                <SearchInput/>
                <RedButton>{searchLabel}</RedButton>
            </div>
        </form>
    )
};

SearchForm.propTypes = {
    title: PropTypes.string,
    searchLabel: PropTypes.string
}