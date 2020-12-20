import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import {MIN} from "./constants";

export function MovieViewer({movie}) {
    const {year, movieUrl} = movie
    const movieYear = useMemo(() => {
            return year.substr(0, 4)
        },
        [year])

    const imageClassName = {
        backgroundImage: `url(${movieUrl})`,
    }
    return (
        <div className='find-movie-container'>
            <div>
                <div className='movie-image' style={imageClassName}/>
            </div>
            <div className='movie-info-container'>
                <div className='movie-title'>
                    <p>{movie.title}</p>
                    <p className='movie-rating'>{movie.rating}</p>
                </div>
                <p className='movie-description'>{movie.description}</p>
                <div className='movie-additional-info'>
                    <p>{movieYear}</p>
                    <p>{movie.runtime} {MIN}</p>
                </div>
                <p className='movie-long-description'>{movie.overview}</p>
            </div>
        </div>
    )
}

MovieViewer.propTypes = {
    movie: PropTypes.object
}