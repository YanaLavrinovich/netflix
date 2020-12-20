import React from 'react';
import './styles.css';
import {ERROR_MESSAGE} from "./constants";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log(error + errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='error-container'>
                    <h1 className='error-title'>{ERROR_MESSAGE}</h1>
                </div>

            )
        }

        return this.props.children;
    }
}