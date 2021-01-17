import React from 'react';
import MovieListPage from './layouts/MovieListPage/MovieListPage';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {NotFoundPage} from './layouts/NotFoundPage/NotFoundPage';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter forceRefresh={false}>
                <Switch>
                    <Route path='/film/:id' exact>
                        <MovieListPage/>
                    </Route>
                    <Route path='/search/:query' exact>
                        <MovieListPage/>
                    </Route>
                    <Route path='/' exact>
                        <MovieListPage/>
                    </Route>
                    <Route>
                        <NotFoundPage/>
                    </Route>
                </Switch>
            </BrowserRouter>

        </Provider>

    );
}

export default App;
