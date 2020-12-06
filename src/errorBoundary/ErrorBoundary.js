import React from 'react';
import './styles.css';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error + errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='error-container'>
                    <h1 className='error-title'>Something went wrong.</h1>
                </div>

            )
        }

        return this.props.children;
    }
}