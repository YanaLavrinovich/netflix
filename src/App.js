import React from 'react';
import MovieListPage from './layouts/MovieListPage/MovieListPage';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

function App() {

    const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

    return (
        <Provider store={store}>
            <MovieListPage/>
        </Provider>

    );
}

export default App;
