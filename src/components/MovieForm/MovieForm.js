import React from 'react';
import './styles.css'
import {RedButton} from "../RedButton/RedButton";

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
        this.setState({[fieldName]: value}, () => console.log(this.state));
    }

    handleResetClick = () => {
        if (this.props.movie) {
            this.setState({...this.props.movie})
        } else {
            this.setState({
                title: '',
                year: '',
                movieUrl: '',
                genre: '',
                overview: '',
                runtime: ''
            })
        }
    }

    render() {
        return (
            <>
                <div>
                    <div className='form-group'>
                        <label className='form-input-label'>TITLE</label>
                        <input className='form-input' placeholder='Title here' name='title' value={this.state.title}
                               onChange={(e) => this.handleFieldChange('title', e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label className='form-input-label'>RELEASE DATE</label>
                        <input type='date' className='form-input' placeholder='Select Date' name='year'
                               value={this.state.year}
                               onChange={(e) => this.handleFieldChange('year', e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label className='form-input-label'>MOVIE URL</label>
                        <input className='form-input' placeholder='Movie URL here' name='movieUrl'
                               value={this.state.movieUrl}
                               onChange={(e) => this.handleFieldChange('movieUrl', e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label className='form-input-label'>GENRE</label>
                        <input className='form-input' placeholder='Genre here' name='genre' value={this.state.genre}
                               onChange={(e) => this.handleFieldChange('genre', e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label className='form-input-label'>OVERVIEW</label>
                        <input className='form-input' placeholder='Overview here' name='overview'
                               value={this.state.overview}
                               onChange={(e) => this.handleFieldChange('overview', e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label className='form-input-label'>RUNTIME</label>
                        <input className='form-input' placeholder='Runtime here' name='runtime'
                               value={this.state.runtime}
                               onChange={(e) => this.handleFieldChange('runtime', e.target.value)}/>
                    </div>
                </div>
                <div className='form-footer'>
                    <button key='reset' className='border-button' onClick={this.handleResetClick}>RESET</button>
                    <RedButton key='submit' onClick={() => this.props.onSubmit(this.state)}>SUBMIT</RedButton>
                </div>
            </>
        )
    }


}