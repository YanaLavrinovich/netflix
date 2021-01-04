import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {DropdownOption} from '../DropdownOption/DropdownOption';
import {DropdownValue} from '../DropdownValue/DropdownValue';

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
                    ? <div className='dropdown-list'>
                        {options.map((option) => {
                            return <DropdownOption
                                option={option}
                                checked={value.includes(option)}
                                onCheckboxChange={onCheckboxChange}
                            />
                        })}
                    </div>
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