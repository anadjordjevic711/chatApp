import React, { Component } from 'react';
import Axios from 'axios';
import Styles from '../../style/style';
const token = 'vybhNaJ3kLPK';
const url = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?&token=' + token;

class SendMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }
    }

    sendMessage = (messageText) => {
        const author = this.props.author;
        const { sendCallback } = this.props;

        console.log(messageText + "poruka")
        Axios.post(url, {
            "Content-Type" : 'application/json',
            "token" : token,
            "message" : messageText,
            "author": author
          })
          .then(function (response) {
            console.log(response);
            sendCallback();
          })
          .catch(function (error) {
            console.log(error);
          });

          this.state.message = '';
        
    }

    render() {
        return (
            <div style={ Styles.search }>
                <input style={ Styles.searchInput } placeholder="Type your message here" value = { this.state.message } onChange = { event => this.setState({message: event.target.value}) } onKeyPress = { (event) => { if (event.key == 'Enter') { this.sendMessage(this.state.message) } }}/>
                <button style={ Styles.searchButton } onClick = { () => this.sendMessage(this.state.message) }>Send</button>
            </div>
        )
    }
}

export default SendMessage;