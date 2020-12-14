import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import {MovieImage} from '../MovieImage/MovieImage';
import {MovieCardInfo} from '../MovieCardInfo/MovieCardInfo';

export class MovieCard extends React.PureComponent {
    state = {
        showActions: false
    }

    handleDotsClick = () => {
        this.setState({showActions: !this.state.showActions})
    }

    render() {
        const {movie, onMovieDelete, onMovieEdit} = this.props
        return (
            <div className='movie-card'>
                <MovieImage showActions={this.state.showActions} image={movie.image} onDotsClick={this.handleDotsClick}
                            onDeleteClick={() => onMovieDelete(movie.id)} onEditClick={() => onMovieEdit(movie.id)}/>
                <MovieCardInfo movie={movie}/>
            </div>
        )
    }


}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        image: PropTypes.string,
        year: PropTypes.string.isRequired
    }).isRequired,
    onMovieDelete: PropTypes.func,
    onMovieEdit: PropTypes.func
}