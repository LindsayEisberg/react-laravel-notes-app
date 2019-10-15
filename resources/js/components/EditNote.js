import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class EditNote extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            copy: '',
            notes: [],
            errors: []
        }
        //bind
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.hasError = this.hasError.bind(this)
        this.renderError = this.renderError.bind(this)
       
    }
    handleChange(event) {
        const {name, value, type} = event.target
        this.setState({
            [name]: value
        })
    }
    // handleSubmit
    handleSubmit(event) {
        event.preventDefault();
        axios.put(`/api/notes/${this.props.match.params.id}`, {
            title: this.state.title,
            copy: this.state.copy
        }).then(response => {
            // console.log(response)
           this.props.history.push('/');
        }).catch(error => {
            this.setState({
                errors: error.response.data.errors
            })
        });
    }
    // Get single task to be edited
    getNotes() {
        axios.get(`/api/notes/${this.props.match.params.id}/edit`).then(response => 
            
            this.setState({
                notes: [response.data.note],
                title: response.data.note.title,
                copy: response.data.note.copy
            })
        );
    }
    componentDidMount() {
        this.getNotes();
    }
    hasError(field) {
        // console.log(field)
        return !!this.state.errors[field]
    }
    renderError(field) {
        if(this.hasError(field)) {
            return (
                <div className="validation-message">
                    <p className="f6 lh-copy dark-red mb0 mt1">{this.state.errors[field][0]}</p>
                </div>
            )
        }
    }
    render() {
    	// console.log(this.props.match.params.id);
        return (
            <div className="wrap">
                <div className="pv4">
                    <h1 className="tc f1 lh-title ">Edit Note</h1>
                    <div className="center w-75-l w-80-m w-100">
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="form-group db mb3">
                                <label htmlFor="title" className="form__label--hidden db">Note Title</label>
                                <input 
                                    type="text"
                                    id="title"
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                    name="title"
                                    className={`form__input db w-100 ${this.hasError('title') ? 'is-invalid' : ''}`}
                                    placeholder="Title*" 
                                    
                                />
                                {this.renderError('title')}
                            </div>
                            <div className="form-group db mb3">
                                 <label htmlFor="copy" className="form__label--hidden db">Note Copy</label>
                                <textarea 
                                    id="copy"
                                    onChange={this.handleChange}
                                    value={this.state.copy}
                                    className={`form__input form__input--textarea db w-100 ${this.hasError('copy') ? 'is-invalid' : ''}`}
                                    name="copy"
                                    rows="10"
                                    placeholder="Enter Note Copy*" 
                                    
                                />
                                {this.renderError('copy')}
                            </div>
                            <button type="submit" className="btn btn--primary ba bw1 b--dark-green near-white tc dib">Update Note</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditNote