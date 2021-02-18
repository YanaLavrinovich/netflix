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
                    <div className='movie-title-name'>{movie.title}</div>
                    <div className='movie-rating'>{voteAverage || 0}</div>
                </div>
                <p className='movie-tagline'>{movie.tagline}</p>
                <div className='movie-additional-info'>
                    <p>{movieYear}</p>
                    <p className='movie-runtime'>{movie.runtime || 0} {MIN}</p>
                </div>
                <p className='movie-long-description'>{movie.overview}</p>
            </div>
        </div>
    )
}

MovieViewer.propTypes = {
    movieId: PropTypes.string
}