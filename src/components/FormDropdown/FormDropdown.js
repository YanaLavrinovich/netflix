import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {DropdownValue} from '../DropdownValue/DropdownValue';
import {DropdownList} from '../DropdownList/DropdownList';
import {useField} from 'formik';

export function FormDropdown({placeholder, label, options, name}) {
    const [showOptions, setShowOptions] = useState(false)
    const [field, meta] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <div className='form-dropdown'>
            <label className='form-dropdown-label'>{label}</label>
            <div>
                <DropdownValue
                    value={meta.value}
                    placeholder={placeholder}
                    showOptions={showOptions}
                    showError={showError}
                    onClick={() => setShowOptions(!showOptions)}
                />

                {showOptions && <DropdownList
                    className='dropdown-list-margin'
                    name={name}
                    value={meta.value}
                    options={options}
                    onCheckboxChange={field.onCheckboxChange}
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
    options: PropTypes.array,
    placeholder: PropTypes.string,
    name: PropTypes.string
}