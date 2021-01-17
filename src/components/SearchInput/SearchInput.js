import React from 'react';
import './styles.css'
import {SEARCH_INPUT_PLACEHOLDER} from './constants';
import PropTypes from 'prop-types';
import {useField} from 'formik';
import classNames from 'classnames';

export function SearchInput({name}) {
    const [field, meta] = useField(name);
    const showError = meta.touched && meta.error;
    const inputClasses = classNames({
        'search-input': true,
        'search-input-error': showError
    });

    return (
        <>
            <input
                id={name}
                className={inputClasses}
                placeholder={SEARCH_INPUT_PLACEHOLDER}
                name={name}
                value={meta.value || ''}
                onChange={field.onChange}
            />
            {
                showError && (
                    <div className='form-group-error'>{meta.error}</div>
                )
            }
        </>
    )
}

SearchInput.propTypes = {
    name: PropTypes.string
}