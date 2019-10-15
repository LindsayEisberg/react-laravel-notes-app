import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import App from './components/App';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';
import SingleNote from './components/SingleNote';
 
class Home extends Component {
    render() {
        return (
             <HashRouter>
                <div>
                    <Header />
                    <Switch>   
                        <Route path="/:id/edit" component={EditNote} />
                        <Route path="/create" component={CreateNote} />
                        <Route path='/:id' component={SingleNote} />
                        <App />  
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Home />, document.getElementById('root'));
}
