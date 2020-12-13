import React from 'react';
import './styles.css'
import PropTypes from 'prop-types';


export function Select({options, selected, onChangeValue}) {
    return (
        <select className='sort-select' value={selected} onChange={onChangeValue}>
            {
                options && options.map(option => {
                    return <option key={option.id} value={option.id}>{option.name}</option>
                })
            }
        </select>
    )
}

Select.propTypes = {
    options: PropTypes.array,
    selected: PropTypes.string,
    onChangeValue: PropTypes.func
}