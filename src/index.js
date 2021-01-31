import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from "./redux/configureStore";
import {BrowserRouter} from "react-router-dom";

const initialState = global.window && global.window.__INITIAL_STATE__
const store = configureStore(initialState);

ReactDOM.hydrate(
    <React.StrictMode>
        <App
            store={store}
            Router={BrowserRouter}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
