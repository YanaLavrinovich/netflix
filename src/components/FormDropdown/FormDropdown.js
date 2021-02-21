import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {DropdownValue} from '../DropdownValue/DropdownValue';
import {DropdownList} from '../DropdownList/DropdownList';
import {useField} from 'formik';

export function FormDropdown({placeholder, label, options, name}) {
    const [showOptions, setShowOptions] = useState(false)
    const [field, meta] = useField(name);
    const showError = meta.touched && meta.error;

    const handleClickShowOptions = useCallback(() => {
        setShowOptions(!showOptions)
    }, [showOptions, setShowOptions])

    return (
        <div className='form-dropdown'>
            <label className='form-dropdown-label'>{label}</label>
            <div>
                <DropdownValue
                    value={meta.value}
                    placeholder={placeholder}
                    showOptions={showOptions}
                    showError={showError}
                    onClick={handleClickShowOptions}
                />

                {showOptions && <DropdownList
                    className='dropdown-list-margin'
                    name={name}
                    value={meta.value}
                    options={options}
                    onCheckboxChange={field.onChange}
                />}
                {showError && (
                    <div className='form-group-error'>{meta.error}</div>
                )}
            </div>
        </div>
    )
}

FormDropdown.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    placeholder: PropTypes.string,
    name: PropTypes.string
}

FormDropdown.defaultProps = {
    label: '',
    options: [],
    placeholder: '',
    name: ''
}