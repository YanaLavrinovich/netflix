import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import classNames from 'classnames';

export function DropdownOption({name, option, checked, onCheckboxChange}) {

    return <label className={classNames('dropdown-option', 'dropdown-option-margin')}>
        <input
            type='checkbox'
            name={name}
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
    name: PropTypes.string,
    option: PropTypes.string,
    checked: PropTypes.bool,
    onCheckboxChange: PropTypes.func
}