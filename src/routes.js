import loadable from '@loadable/component'
import {fetchMovieByIdAction, setSearchTextAction} from './redux/actions/movies';

const MovieListPage = loadable(() => import('./layouts/MovieListPage/MovieListPage'))

export const ROUTES = [
    {
        id: 1,
        path: '/',
        component: MovieListPage,
        exact: true
    },
    {
        id: 2,
        path: '/film/:id',
        component: MovieListPage,
        action: fetchMovieByIdAction,
        exact: true
    },
    {
        id: 3,
        path: '/search/:query',
        component: MovieListPage,
        action: setSearchTextAction,
        exact: true
    }
];