import {render} from '@testing-library/react';
import React from 'react'
import {MovieImage} from "../../../components/MovieImage/MovieImage";

test('render Movie Image', () => {
    const {asFragment} = render(<MovieImage
        image='test_url'
        onDeleteClick={jest.fn()}
        onEditClick={jest.fn()}
        onMovieClick={jest.fn()}
    />);

    expect(asFragment(<MovieImage
        image='test_url'
        onDeleteClick={jest.fn()}
        onEditClick={jest.fn()}
        onMovieClick={jest.fn()}
    />)).toMatchSnapshot();
});
