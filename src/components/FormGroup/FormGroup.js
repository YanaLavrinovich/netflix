import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export function FormGroup({type, fieldName, placeholder, label, value, onFieldChange, isReadOnly = false}) {
    return (
        <div className='form-group'>
            <label className='form-group-input-label'>{label}</label>
            {!isReadOnly
                ? <input
                    type={type}
                    className='form-group-input'
                    placeholder={placeholder}
                    name={fieldName}
                    value={!!value ? value : ''}
                    onChange={(e) => onFieldChange(fieldName, e.target.value)}
                />
                : <div className='form-group-read-only-input'>{value}</div>
            }

        </div>
    )
}

FormGroup.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    fieldName: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    onFieldChange: PropTypes.func,
    isReadOnly: PropTypes.bool
}