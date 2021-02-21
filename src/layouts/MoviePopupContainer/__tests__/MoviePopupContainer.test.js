import React from 'react';
import {render} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {MOVIE} from '../../../testUtils/constants';
import {Provider} from 'react-redux';
import MoviePopupContainer from '../MoviePopupContainer';
import {ADD_MOVIE} from '../../../components/AddMoviePopup/constants';
import {DELETE_MOVIE} from '../../../components/DeleteMoviePopup/constants';
import {EDIT_MOVIE} from '../../../components/EditMoviePopup/constants';

const mockStore = configureStore([]);

describe('movie popup container', () => {
    it('render movie popup container', () => {
        const store = mockStore({
            movies: {
                viewedMovie: MOVIE,
                movies: [MOVIE]
            },
            popups: {
                visiblePopupName: ''
            }
        });
        store.dispatch = jest.fn();

        const {queryByText} = render(
            <Provider store={store}>
                <MoviePopupContainer currentMovieId={null}/>
            </Provider>
        );

        expect(queryByText(ADD_MOVIE)).toBeNull()
        expect(queryByText(EDIT_MOVIE)).toBeNull()
        expect(queryByText(DELETE_MOVIE)).toBeNull()
    })
})