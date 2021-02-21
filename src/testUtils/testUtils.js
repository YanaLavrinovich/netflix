import React from 'react';
import {createMemoryHistory} from 'history';
import {Route, Router} from 'react-router-dom';
import {render} from '@testing-library/react';

export function renderWithRouter(
    ui,
    {
        route = '/',
        history = createMemoryHistory({initialEntries: [route]})
    } = {}
) {
    return {
        ...render(
            <Router history={history}>
                <Route path={route}>{ui}</Route>
            </Router>
        ),
        history
    };
}
