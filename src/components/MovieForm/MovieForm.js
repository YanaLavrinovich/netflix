import React from 'react';
import './styles.css'
import {RedButton} from '../RedButton/RedButton';
import {FormGroup} from '../FormGroup/FormGroup';
import {BorderButton} from '../BorderButton/BorderButton';
import PropTypes from 'prop-types';

export class MovieForm extends React.PureComponent {

    state = {
        title: '',
        year: '',
        movieUrl: '',
        genre: '',
        overview: '',
        runtime: ''
    }

    componentDidMount() {
        if (this.props.movie) {
            this.setState({...this.props.movie})
        }
    }

    handleFieldChange = (fieldName, value) => {
        this.setState({[fieldName]: value});
    }

    handleResetClick = () => {
        this.setState({
            title: '',
            year: '',
            movieUrl: '',
            genre: '',
            overview: '',
            runtime: ''
        }, () => !!this.props.movie && this.setState({...this.props.movie}))
    }

    render() {
        return (
            <>
                <div>
                    <FormGroup
                        label='TITLE'
                        value={this.state.title}
                        placeholder='Title here'
                        onFieldChange={this.handleFieldChange}
                        fieldName='title'
                    />
                    <FormGroup
                        type='date'
                        label='RELEASE DATE'
                        value={this.state.year}
                        placeholder='Select Date'
                        onFieldChange={this.handleFieldChange}
                        fieldName='year'
                    />
                    <FormGroup
                        label='MOVIE URL'
                        value={this.state.movieUrl}
                        placeholder='Movie URL here'
                        onFieldChange={this.handleFieldChange}
                        fieldName='movieUrl'
                    />
                    <FormGroup
                        label='GENRE'
                        value={this.state.genre}
                        placeholder='Genre here'
                        onFieldChange={this.handleFieldChange}
                        fieldName='genre'
                    />
                    <FormGroup
                        label='OVERVIEW'
                        value={this.state.overview}
                        placeholder='Overview here'
                        onFieldChange={this.handleFieldChange}
                        fieldName='overview'
                    />
                    <FormGroup
                        label='RUNTIME'
                        value={this.state.runtime}
                        placeholder='Runtime here'
                        onFieldChange={this.handleFieldChange}
                        fieldName='runtime'
                    />
                </div>

                <div className='movie-form-footer'>
                    <BorderButton onClick={this.handleResetClick}>RESET</BorderButton>
                    <RedButton
                        key='submit'
                        onClick={() => this.props.onSubmit(this.state)}
                    >
                        {this.props.okLabel}
                    </RedButton>
                </div>
            </>
        )
    }
}

MovieForm.propTypes = {
    movie: PropTypes.object,
    okLabel: PropTypes.string.isRequired,
    onSubmit: PropTypes.func
}