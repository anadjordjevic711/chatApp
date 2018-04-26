import React, { Component } from 'react';
import Axios from 'axios';
import Message from './message';
import Styles from '../../style/style';


class MessagesDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const currentAuthor = this.props.author;
       
        if(!this.props.allMessages.length) {
            return <div>Start chatting!</div>
        }
       
        return (
            <div style = { Styles.msgContainer }>
                { this.props.allMessages.map(msg => <Message currentAuthor = { currentAuthor } author = { msg.author } message = { msg.message } dateAndTime = { msg.timestamp } key = { msg._id } /> ) }
            </div>
        )
    }
} 


  export default MessagesDisplay;