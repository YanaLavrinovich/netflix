import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export const MovieSort = props => {
    const {sortOptions} = props
    return (
        <div className='filters-line-sorting'>
            <label className='sorting-label'>SORT BY</label>
            <select className='select-sorting btn'>
                {
                    sortOptions ? sortOptions.map(option => {
                        return <option key={option.id} value={option.id}>{option.name}</option>
                    }) : null
                }
            </select>
        </div>
    )
}

MovieSort.propTypes = {
    sortOptions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
}

