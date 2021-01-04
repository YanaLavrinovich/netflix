import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import classNames from 'classnames';
import {DropdownOption} from '../DropdownOption/DropdownOption';

export function DropdownList({options, value, onCheckboxChange, className}) {
    return <div className={classNames('dropdown-list', className)}>
        {options.map((option) => {
            return <DropdownOption
                key={option}
                option={option}
                checked={value.includes(option)}
                onCheckboxChange={onCheckboxChange}
            />
        })}
    </div>
}

DropdownList.propTypes = {
    options: PropTypes.array,
    value: PropTypes.array,
    onCheckboxChange: PropTypes.func,
    className: PropTypes.string
}