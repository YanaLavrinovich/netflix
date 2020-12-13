import React from 'react';
import './styles.css';
import {RedButton} from '../RedButton/RedButton';

export const Popup = ({isShow, onClose, onConfirm, title, children}) => {
    return (
        isShow && <div className='popup'>
            <div className='popup_inner'>
                <h1 className='popup-title-color'>{title}</h1>
                {children}
                <button onClick={onClose}>close me</button>
                <RedButton onClick={onConfirm}>CONFIRM</RedButton>
            </div>
        </div>
    );
}