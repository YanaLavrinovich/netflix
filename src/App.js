import React from 'react';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ROUTES} from './routes';
import loadable from '@loadable/component';

const NotFoundPage = loadable(() => import('./layouts/NotFoundPage/NotFoundPage'))

function App({store, location, context, Router}) {
    return (
        <Provider store={store}>
            <Router location={location} context={context} forceRefresh={false}>
                <Switch>
                    {ROUTES.map(route => {
                        return <Route
                            key={route.id}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    })}
                    <Route>
                        <NotFoundPage/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
