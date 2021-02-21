import React, {useCallback} from 'react';
import './styles.css'
import PropTypes from 'prop-types';


export function Select({options, selected, onChangeValue}) {
    const handleChangeValue = useCallback((e) => {
        onChangeValue(e.target.value)
    }, [onChangeValue])

    return (
        <select
            data-testid='select'
            className='sort-select'
            value={selected}
            onChange={handleChangeValue}
        >
            {
                options?.map(option => {
                    return <option
                        key={option.id}
                        value={option.id}
                    >
                        {option.name}
                    </option>
                })
            }
        </select>
    )
}

Select.propTypes = {
    options: PropTypes.array,
    selected: PropTypes.string,
    onChangeValue: PropTypes.func.isRequired
}

Select.defaultProps = {
    options: [],
    selected: ''
}