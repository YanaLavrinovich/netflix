import React from 'react';
import './styles.css';

export const MultiSelect = ({options}) => {
    return <div className='multi-select-container'>
        <div className='multi-select-row'>
            <select className='js-select2' multiple='multiple'>
                <option value='O1' data-badge=''>Option1</option>
                <option value='O2' data-badge=''>Option2</option>
                <option value='O3' data-badge=''>Option3</option>
                <option value='O4' data-badge=''>Option4</option>
                <option value='O5' data-badge=''>Option5</option>
                <option value='O6' data-badge=''>Option6</option>
                <option value='O7' data-badge=''>Option7</option>
                <option value='O8' data-badge=''>Option8</option>
                <option value='O9' data-badge=''>Option9</option>
                <option value='O10' data-badge=''>Option10</option>
                <option value='O11' data-badge=''>Option11</option>
                <option value='O12' data-badge=''>Option12</option>
                <option value='O13' data-badge=''>Option13</option>
            </select>
        </div>
    </div>
};