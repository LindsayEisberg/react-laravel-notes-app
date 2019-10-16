import React, {Component} from 'react';

import {Link} from 'react-router-dom';


class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            copy: '',
            notes: [],
            isLoading:true
        }
        this.renderNotes = this.renderNotes.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

    }


    renderNotes() {
        
        return this.state.notes.map(note => (
            

                <div key={note.id} className="all-notes__item bg-near-white mb3 ">
                    <Link className="no-underline db pv3 ph4" to={`/${note.id}`}>
                        <h3 className="near-black fw4 no-underline">{note.title}</h3>
                    </Link>
        
                    {/*<Link to={`/${note.id}/edit`} className="btn btn-small btn-success float-right">Update</Link>
                    <button className="btn btn-small btn-warning float-right" onClick={() => this.handleDelete(note.id)}>Delete</button>*/}
                    
                
             
            </div>
        ));
           
    }
    // Get all Notes from database. 
    getNotes() {
        axios.get('/api/notes').then(response => 
            this.setState({
                notes: [...response.data]
            })
        );
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, 600)
        this.getNotes();
    }
    //Delete Note`
    handleDelete(id) {
        // remove from local state
        const isNotId = note => note.id !== id;
        const updatedNotes = this.state.notes.filter(isNotId);
        this.setState({
            notes: updatedNotes
        })

        //also delete from backend
        axios.delete(`/api/notes/${id}`)


    }
    render() {
        return (
            <div className="wrap">
                <div className="pv4">
                    <h1 className="tc f1 lh-title ">All Notes</h1>
                    {this.state.isLoading ?
                        <div className="flex justify-center">
                            <img src="images/loader.svg" style={{width: 90}} alt=""/>
                        </div> :
                        <div className="pt3">
                            <div className="all-notes">
                                {this.renderNotes()}
                            </div>
                            <div className="flex justify-start btn--container mt4">
                                <Link className="btn btn--ghost b--near-black ba bw1 dib near-black" to={`/create`}>Create New Note</Link>
                            </div>
                             
                        </div>
                    }

                </div>
            </div>
        );
    }
}

export default App;

