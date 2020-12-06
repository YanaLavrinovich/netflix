import React from 'react';

export const SearchForm = () => {
    return (
        <form className='search-form'>
            <h1 className='search-form-title'>FIND YOUR MOVIE</h1>
            <div className='search-form-row'>
                <input className='search-form-input' placeholder='What do you want to watch?' name='search'/>
                <button className='search-form-btn btn'>SEARCH</button>
            </div>
        </form>
    )
};