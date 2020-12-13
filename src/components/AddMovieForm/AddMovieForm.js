import React from 'react';
import './styles.css'

export function AddMovieForm() {

    return (
        <div>
            <label className='popup-input-label'>TITLE</label>
            <input className='popup-input' placeholder='Title here' name='title'/>
            <p/>
            <label className='popup-input-label'>RELEASE DATE</label>
            <input className='popup-input' placeholder='Select Date' name='releaseDate'/>
            <p/>
            <label className='popup-input-label'>MOVIE URL</label>
            <input className='popup-input' placeholder='Movie URL here' name='movieUrl'/>
            <p/>
            <label className='popup-input-label'>GENRE</label>
            <input className='popup-input' placeholder='Genre here' name='genre'/>
            {/*<Multiselect*/}
            {/*    options={genres}*/}
            {/*    displayValue='name'*/}
            {/*    showCheckbox={true}*/}
            {/*/>*/}
            <p/>
            <label className='popup-input-label'>OVERVIEW</label>
            <input className='popup-input' placeholder='Overview here' name='overview'/>
            <p/>
            <label className='popup-input-label'>RUNTIME</label>
            <input className='popup-input' placeholder='Runtime here' name='runtime'/>
        </div>

    )
}