import React, {useState} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles.css'

export function FormDropdown({placeholder, label, value, options, onCheckboxChange}) {
    const [showOptions, setShowOptions] = useState(false)
    const inputClasses = classNames({
        'form-dropdown-input': true,
        'dropdown-open': showOptions,
        'dropdown-close': !showOptions
    })

    return (
        <div className='form-dropdown'>
            <label className='form-dropdown-label'>{label}</label>
            <div>
                <label
                    className={inputClasses}
                    onClick={() => setShowOptions(!showOptions)}
                >
                    {!!value && value.length > 0
                        ? value.join(', ')
                        : <div className='form-dropdown-placeholder'>{placeholder}</div>
                    }
                </label>

                {showOptions
                    ? <div className='dropdown-list'>
                        {options.map((option) => {
                            return <label className='dropdown-option' key={option}>
                                <input
                                    type='checkbox'
                                    className='dropdown-input'
                                    value={option}
                                    onChange={onCheckboxChange}
                                    checked={value.includes(option)}
                                />
                                <span className='dropdown-option-checkmark'/>
                                {option}
                            </label>
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