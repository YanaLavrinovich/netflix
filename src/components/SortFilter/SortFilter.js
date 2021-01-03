import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import {Select} from '../Select/Select';
import {ShadowLabel} from '../ShadowLabel/ShadowLabel';
import {SORT_BY} from './constants';

export function SortFilter({sortOptions, selectedSort, onSortChange}) {
    return (
        <div className='sort-filter'>
            <ShadowLabel>{SORT_BY}</ShadowLabel>
            <Select
                options={sortOptions}
                selected={selectedSort}
                onChangeValue={onSortChange}
            />
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

