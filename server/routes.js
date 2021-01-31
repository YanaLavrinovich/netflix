import MovieListPage from "../src/layouts/MovieListPage/MovieListPage";
import {fetchMovieByIdAction, setSearchTextAction} from "../src/redux/actions/movies";

export const ROUTES = [
    {
        path: '/',
        component: MovieListPage,
    },
    {
        path: '/film/:id',
        component: MovieListPage,
        loadData: (dispatch, url) => dispatch(fetchMovieByIdAction(url.split('/')[2]))
    },
    {
        path: '/search/:query',
        component: MovieListPage,
        loadData: (dispatch, url) => dispatch(setSearchTextAction(url.split('/')[2]))
    }
];