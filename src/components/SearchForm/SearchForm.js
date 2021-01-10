import React from 'react';
import {Title} from '../Title/Title';
import {SearchInput} from '../SearchInput/SearchInput';
import {RedButton} from '../RedButton/RedButton';
import './styles.css';
import PropTypes from 'prop-types';
import {useFormik} from 'formik';
import {connect} from 'react-redux';
import {setSearchTextAction} from '../../redux/actions/movies';

function SearchForm({title, searchLabel, searchText, setSearchText}) {
    const formik = useFormik({
        initialValues: {
            searchText: searchText
        },
        onSubmit: (values) => {
            setSearchText(values.searchText)
        }
    })

    return (
        <form className='search-form' onSubmit={formik.handleSubmit}>
            <Title>{title}</Title>
            <div className='search-form-row'>
                <SearchInput
                    name='searchText'
                    value={formik.values.searchText}
                    onChange={formik.handleChange}
                />
                <RedButton type='submit'>{searchLabel}</RedButton>
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    searchText: state.movies.searchText
})

const mapDispatchToProps = dispatch => ({
    setSearchText: (searchText) => dispatch(setSearchTextAction(searchText))
})

SearchForm.propTypes = {
    title: PropTypes.string,
    searchLabel: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm)