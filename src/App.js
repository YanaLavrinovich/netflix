import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import NotFoundPage from './layouts/NotFoundPage/NotFoundPage';
import MovieListPage from "./layouts/MovieListPage/MovieListPage";


function App({store, location, context, Router}) {
    return (
        <Provider store={store}>
            <Router location={location} context={context} forceRefresh={false}>
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
            </Router>
        </Provider>
    );
}

export default App;
