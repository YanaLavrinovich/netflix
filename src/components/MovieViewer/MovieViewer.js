import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {MIN} from './constants';

export function MovieViewer({movie}) {
    const {
        release_date: releaseDate,
        poster_path: posterPath,
        vote_average: voteAverage
    } = movie

    const movieYear = useMemo(() => {
            return releaseDate.substr(0, 4)
        },
        [releaseDate])

    const imageClassName = {
        backgroundImage: `url(${posterPath})`,
    }
    return (
        <div className='find-movie-container'>
            <div>
                <div className='movie-image' style={imageClassName}/>
            </div>
            <div className='movie-info-container'>
                <div className='movie-title'>
                    <p>{movie.title}</p>
                    <p className='movie-rating'>{!!voteAverage ? voteAverage : 0}</p>
                </div>
                <p className='movie-tagline'>{movie.tagline}</p>
                <div className='movie-additional-info'>
                    <p>{movieYear}</p>
                    <p className='movie-runtime'>{!!movie.runtime ? movie.runtime : 0} {MIN}</p>
                </div>
                <p className='movie-long-description'>{movie.overview}</p>
            </div>
        </div>
    )
}

MovieViewer.propTypes = {
    movie: PropTypes.object
}