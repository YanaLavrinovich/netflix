import React from 'react';
import {text, withKnobs} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {MovieCard} from "./MovieCard";

const MovieCardStory = {
    title: 'Components/MovieCard',
    component: MovieCard,
    decorators: [withKnobs],
}

export default MovieCardStory

export const Primary = () => (
    <MovieCard
        movie={{
            id: 1,
            title: text('Title', 'Movie title'),
            tagline: text('Tagline', 'Movie tagline'),
            release_date: text('Release date', '2018-02-07')
        }}
        onMovieClick={action('movie click')}
        onMovieEdit={action('movie edit')}
        onMovieDelete={action('movie delete')}
    />
);