import React from 'react';
import './styles.css';

export const Popup = ({onClose, title, children}) => {
    return (
        <div className='popup'>
            <div className='popup_inner'>
                <button type="button" className="close" onClick={onClose}>
                    <span>×</span>
                </button>
                <div className='popup_header'>
                    <h1 className='popup-title-color'>{title}</h1>
                </div>
                {children}
            </div>
        </div>
    );
}