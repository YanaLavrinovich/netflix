import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import classNames from 'classnames';

export function DropdownValue({value, placeholder, showOptions, onClick}) {
    const inputClasses = classNames({
        'form-dropdown-input': true,
        'dropdown-open': showOptions,
        'dropdown-close': !showOptions
    })

    return <label
        className={inputClasses}
        onClick={onClick}
    >
        {!!value && value.length > 0
            ? value.join(', ')
            : <div className='form-dropdown-placeholder'>{placeholder}</div>
        }
    </label>
}

DropdownValue.propTypes = {
    value: PropTypes.array,
    placeholder: PropTypes.string,
    showOptions: PropTypes.bool,
    onClick: PropTypes.func
}