import React from 'react';
import {SearchForm} from './SearchForm.js';
import './styles.css';

export class SearchContainer extends React.PureComponent {
    render() {
        return (
            <div className='search-container'>
                <SearchForm/>
            </div>
        )
    }
}