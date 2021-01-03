import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import './styles.css'

export const MovieCardInfo = ({movie}) => {
    const {release_date: releaseDate} = movie

    const movieYear = useMemo(() => {
            return releaseDate.substr(0, 4)
        },
        [releaseDate])

    return (
        <div className='movie-card-info'>
            <div className='movie-card-info-row'>
                <h3 className='movie-card-info-name'>{movie.title}</h3>
                <p className='movie-card-info-year'>{movieYear}</p>
            </div>
            <p className='movie-card-info-tagline'>{movie.tagline}</p>
        </div>
    )
}

MovieCardInfo.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tagline: PropTypes.string,
        release_date: PropTypes.string.isRequired
    }).isRequired
}