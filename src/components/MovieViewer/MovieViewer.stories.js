import React from 'react';
import {number, text, withKnobs} from '@storybook/addon-knobs';
import {MovieViewer} from "./MovieViewer";

const MovieViewerStory = {
    title: 'Components/MovieViewer',
    component: MovieViewer,
    decorators: [withKnobs],
}

export default MovieViewerStory

export const Primary = () => (
    <MovieViewer
        movie={{
            id: 1,
            title: text('Title', 'Movie title'),
            tagline: text('Tagline', 'Movie tagline'),
            release_date: text('Release date', '2018-02-07'),
            overview: text('Overview', 'Long description'),
            runtime: number('Runtime', 180),
            vote_average: number('Vote average', 4.7)
        }}
    />
);