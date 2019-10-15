import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class SingleNote extends Component {
    constructor() {
        super()
        this.state = {
           note: {},
           notes: [],
           isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, 600)
        const noteId = this.props.match.params.id

        axios.get(`/api/notes/${noteId}`).then(response => {

            this.setState({
                note: response.data.note
            })
        })
    }
    
    //Delete Note
    handleDelete(id) {
        // remove from local state
        const isNotId = note => note.id !== id;
        const updatedNotes = this.state.notes.filter(isNotId);
        this.setState({
            notes: updatedNotes
        })
        const { history } = this.props
        //also delete from backend
        axios.delete(`/api/notes/${id}`)
            .then(response => {
                history.push('/')
            })


    }
    render() {
        const {note} = this.state
        return (
            <div className="wrap">
                <div className="pv4">

                    <h1 className="relative h--one tc f1  lh-title fw6">{note.title}</h1>
                    {this.state.isLoading ?
                        <div className="flex justify-center">
                            <img src="images/loader.svg" style={{width: 90}} alt=""/>
                        </div> :
                        <div className="pt3 note__content center w-75-l w-80-m w-100">
                            <div className="note__copy lh-copy">
                            {note.copy}
                            </div>
                            <div className="note__buttons mt4 flex flex-wrap justify-center">
                                <Link to={`/${note.id}/edit`} className="btn btn--primary ba bw1 b--dark-green near-white mh3 tc w-25-l w-80-m w-100 mb0-l mb3 dib">Update Note</Link>
                                <button className="btn btn--ghost mh3 tc w-25-l w-80-m w-100 mb0-l mb3 b--near-black ba bw1 dib near-black" onClick={() => this.handleDelete(note.id)}>Delete</button>
                            </div>
                        </div>
                    }
                </div>
            </div>

        );
    }
}

export default SingleNote;

