import React from 'react';
import ReactDOM from 'react-dom'
import './styles.css';
import {CloseButton} from '../CloseButton/CloseButton';
import PropTypes from 'prop-types';


export function Popup({onClose, title, children}) {
    return ReactDOM.createPortal(
        <div className='popup'>
            <div className='popup_inner'>
                <CloseButton onClick={onClose}/>
                <div className='popup_header'>
                    <h1 className='popup-title-color'>{title}</h1>
                </div>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}


Popup.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}