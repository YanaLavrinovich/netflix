import React, {useEffect} from 'react';
import loadable from '@loadable/component'
import './styles.css';
import {HeaderLogo} from '../HeaderLogo/HeaderLogo';
import {NavBar} from '../NavBar/NavBar';
import PropTypes from 'prop-types';
import {NETFLIX, PLUS_ADD_MOVIE, ROULETTE} from './constants';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchMovieByIdAction} from '../../redux/actions/movies';

const MagnifierButton = loadable(() => import('../MagnifierButton/MagnifierButton'))
const ShadowButton = loadable(() => import('../ShadowButton/ShadowButton'))
const MovieViewer = loadable(() => import('../MovieViewer/MovieViewer'))
const MovieSearcher = loadable(() => import('../MovieSearcher/MovieSearcher'))

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
                    : <ShadowButton onClick={onAddMovieClick}>{PLUS_ADD_MOVIE}</ShadowButton>}
            </NavBar>

            <div className='header-container'>
                {!!id && !!viewedMovie
                    ? <MovieViewer movie={viewedMovie}/>
                    : <MovieSearcher onSearchClick={onSearchClick}/>}
            </div>

        </div>
    )
};

Header.propTypes = {
    onAddMovieClick: PropTypes.func,
    onMagnifierClick: PropTypes.func,
    onSearchClick: PropTypes.func
}

const mapStateToProps = state => ({
    viewedMovie: state.movies.viewedMovie
})

const mapDispatchToProps = dispatch => ({
    fetchMovieById: (movieId) => dispatch(fetchMovieByIdAction(movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)