import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {DropdownValue} from '../DropdownValue/DropdownValue';
import {DropdownList} from '../DropdownList/DropdownList';

export function FormDropdown({placeholder, label, value, options, onCheckboxChange}) {
    const [showOptions, setShowOptions] = useState(false)

    return (
        <div className='form-dropdown'>
            <label className='form-dropdown-label'>{label}</label>
            <div>
                <DropdownValue
                    value={value}
                    placeholder={placeholder}
                    showOptions={showOptions}
                    onClick={() => setShowOptions(!showOptions)}
                />

                {showOptions
                    ? <DropdownList
                        className='dropdown-list-margin'
                        value={value}
                        options={options}
                        onCheckboxChange={onCheckboxChange}
                    />
                    : null}
            </div>
        </div>
    )
}

FormDropdown.propTypes = {
    label: PropTypes.string,
    value: PropTypes.array,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    onCheckboxChange: PropTypes.func
}