import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import {Select} from '../Select/Select';
import {ShadowLabel} from '../ShadowLabel/ShadowLabel';

export const SortFilter = props => {
    const {sortOptions, selectedSort, onSortChange} = props
    return (
        <div className='sort-filter'>
            <ShadowLabel>SORT BY</ShadowLabel>
            <Select options={sortOptions} selected={selectedSort} onChangeValue={onSortChange}/>
        </div>
    )
}

SortFilter.propTypes = {
    sortOptions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    ),
    selectedSort: PropTypes.string,
    onSortChange: PropTypes.func
}

