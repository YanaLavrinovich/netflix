import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export function DropdownOption({option, checked, onCheckboxChange}) {

    return <label className='dropdown-option' key={option}>
        <input
            type='checkbox'
            className='dropdown-input'
            value={option}
            onChange={onCheckboxChange}
            checked={checked}
        />
        <span className='dropdown-option-checkmark'/>
        {option}
    </label>
}

DropdownOption.propTypes = {
    option: PropTypes.string,
    checked: PropTypes.bool,
    onCheckboxChange: PropTypes.func
}