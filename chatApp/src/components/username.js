import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './app';
import Styles from '../../style/style';

class Username extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            validationText: ''
        }
    }

    // componentDidMount() {
    //     document.body.style.height = '100%';
    //     document.body.style.padding = 0;
    //     document.body.style.backgroundImage = 'url(/assets/chatBackground.png)';
    // }

    getAuthor = () => {
        if(!this.state.author) {
            console.log(this.state.author);
            this.setState( {validationText: 'Hey, you gonna need a name for this ;)'});
           
        } else {
            browserHistory.push("/app/" + this.state.author);
        }
    }

    render () {
        return (
            <div style={ Styles.containerAuthor }>
                <input style={ Styles.inputAuthor } placeholder="Author" onChange = { event => this.setState({author: event.target.value}) } onKeyPress = { (event) => { if (event.key == 'Enter') { this.getAuthor() }} }/>
                <button style={ Styles.buttonAuthor } onClick = { () => this.getAuthor() } >Chat</button>
                <div style = { Styles.validationText }>{ this.state.validationText }</div>
            </div>
        )
    }
}

export default Username;