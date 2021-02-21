import React, {useEffect} from 'react';
import './styles.css';
import {MovieSearcher} from '../MovieSearcher/MovieSearcher';
import {HeaderLogo} from '../HeaderLogo/HeaderLogo';
import {ShadowButton} from '../ShadowButton/ShadowButton';
import {NavBar} from '../NavBar/NavBar';
import PropTypes from 'prop-types';
import {MagnifierButton} from '../MagnifierButton/MagnifierButton';
import {MovieViewer} from '../MovieViewer/MovieViewer';
import {NETFLIX, PLUS_ADD_MOVIE, ROULETTE} from './constants';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchMovieByIdAction} from '../../redux/actions/movies';

const Header = ({
                    viewedMovie,
                    fetchMovieById,
                    onAddMovieClick,
                    onMagnifierClick,
                    onSearchClick
                }) => {
    const {id} = useParams()

    useEffect(() => {
        id && fetchMovieById(id)
    }, [fetchMovieById, id])

    return (
        <div className='header'>
            <NavBar>
                <HeaderLogo><b>{NETFLIX}</b>{ROULETTE}</HeaderLogo>

                {!!id
                    ? <MagnifierButton onClick={onMagnifierClick}/>
                    : <ShadowButton onClick={onAddMovieClick}>{PLUS_ADD_MOVIE}</ShadowButton>
                }
            </NavBar>

            <div className='header-container'>
                {!!id && !!viewedMovie
                    ? <MovieViewer movie={viewedMovie}/>
                    : <MovieSearcher onSearchClick={onSearchClick}/>
                }
            </div>
        </div>
    )
};

Header.propTypes = {
    onAddMovieClick: PropTypes.func.isRequired,
    onMagnifierClick: PropTypes.func.isRequired,
    onSearchClick: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    viewedMovie: state.movies.viewedMovie
})

const mapDispatchToProps = dispatch => ({
    fetchMovieById: (movieId) => dispatch(fetchMovieByIdAction(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)