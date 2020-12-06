import React from 'react';
import './styles.css'
import {GenreFilters} from './GenreFilters';
import PropTypes from 'prop-types';

export class GenreFiltersContainer extends React.PureComponent {
    render() {
        const {genres} = this.props
        return (
            <div className='filters-line-genres'>
                {
                    genres ? genres.map(genre => {
                        return <GenreFilters key={genre.id} genre={genre}/>
                    }) : null
                }
            </div>
        )
    }
}

GenreFiltersContainer.propTypes = {
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
}