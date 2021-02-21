import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import classNames from 'classnames';
import {DropdownOption} from '../DropdownOption/DropdownOption';

export function DropdownList({options, value, name, onCheckboxChange, className}) {
    return (
        <div className={classNames('dropdown-list', className)}>
            {
                options.map((option) => {
                    return <DropdownOption
                        key={option}
                        name={name}
                        option={option}
                        checked={value.includes(option)}
                        onCheckboxChange={onCheckboxChange}
                    />
                })
            }
        </div>
    )
}

DropdownList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    onCheckboxChange: PropTypes.func.isRequired,
    className: PropTypes.string
}

DropdownList.defaultProps = {
    options: [],
    value: [],
    name: '',
    className: ''
}