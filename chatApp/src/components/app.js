import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import SendMessage from './send_message'
import MessagesDisplay from './messages_display';
import Styles from '../../style/style';

const token = 'vybhNaJ3kLPK';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allMessages: []
        }
    }  


    componentDidMount() {
        this.getAllMessages();
    }

    getAllMessages = () => {
        let date = new Date();
        
        const url = `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?since=${date.setMinutes(date.getMinutes() - 10)}&token=${token}` 
        
        Axios.get(url)
        .then( (response) => {
            this.setState({allMessages: response.data});
            console.log(this.state.allMessages);
        })
        .catch( (error) => {
            console.log(error);
        });
    }

    render () {
        return (
            <div style={ Styles.wrapper }>
                <MessagesDisplay allMessages = { this.state.allMessages } author={ this.props.params.author }/>
                <SendMessage sendCallback = { this.getAllMessages } author={ this.props.params.author }/>
            </div>
        )
    }
}

export default App;