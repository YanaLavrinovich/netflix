import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export function FormGroup({type, fieldName, placeholder, label, value, onFieldChange}) {
    return (
        <div className='form-group'>
            <label className='form-group-input-label'>{label}</label>
            <input type={type} className='form-group-input' placeholder={placeholder} name={fieldName} value={value}
                   onChange={(e) => onFieldChange(fieldName, e.target.value)}/>
        </div>
    )
}

FormGroup.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    fieldName: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onFieldChange: PropTypes.func.isRequired
}