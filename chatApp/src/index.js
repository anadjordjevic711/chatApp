import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Axios from 'axios';
import App from './components/app';
import Username from './components/username';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Imprima', 'cursive']
  }
});

class Main extends Component {
    constructor(props) {
        super(props);
    }
   
    render () {
        return (
            <Router history={ browserHistory }>
                <Route exact path='/' component={ Username }/>
                <Route path='/app/:author' component={ App } />
            </Router>
        )
    }
}

ReactDOM.render(<Main />, document.querySelector('.container'));