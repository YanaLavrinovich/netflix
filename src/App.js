import {Footer} from './modules/footer/Footer.js'
import {MovieContainer} from "./modules/movies/MovieContainer";
import React from "react";
import {Header} from "./modules/header/Header";
import {ErrorBoundary} from "./errorBoundary/ErrorBoundary";
import './App.css';

function App() {
    return (
        <>
            <ErrorBoundary>
                <Header/>
                <MovieContainer/>

            </ErrorBoundary>
            <Footer/>
        </>
    );
}

export default App;
