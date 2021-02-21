import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css'
import {useField} from 'formik';

export function FormGroup({
                              type,
                              name,
                              placeholder,
                              label,
                              isReadOnly = false,
                          }) {
    const [field, meta] = useField(name);
    const showError = meta.touched && meta.error;
    const inputClasses = classNames({
        'form-group-input': true,
        'form-group-input-error': showError
    });

    return (
        <div className='form-group'>
            <label className='form-group-input-label'>{label}</label>
            {!isReadOnly
                ? <>
                    <input
                        type={type}
                        className={inputClasses}
                        placeholder={placeholder}
                        id={name}
                        name={name}
                        value={meta.value || ''}
                        onChange={field.onChange}
                    />
                    {showError && (
                        <div className='form-group-error'>{meta.error}</div>
                    )}
                </>
                : <div className='form-group-read-only-input'>{meta.value}</div>
            }
        </div>
    )
}

FormGroup.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    isReadOnly: PropTypes.bool
}

FormGroup.defaultProps = {
    type: '',
    label: '',
    name: '',
    placeholder: '',
    isReadOnly: false
}