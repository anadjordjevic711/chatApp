import React, { Component } from 'react';
import SendMessage from './send_message';
import Styles from '../../style/style';

class Message extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            message: this.props.message,
            author: this.props.author,
            currentAuthor: this.props.currentAuthor,
            dateAndTime: this.props.dateAndTime
        }
    }

    dateFormatting = (timestamp) => {
        let fullDate = new Date(timestamp);
        let date = fullDate.getDate();
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        let month = months[fullDate.getMonth()]; 
        let year = fullDate.getFullYear();
        let hours = fullDate.getHours();
        let minutes = fullDate.getMinutes();
        let time = date + ' ' + month + ' ' + year + ' ' + hours + ': ' + minutes;
        return time;
    }

    render() {
        return (
            <div style = { this.state.author == this.state.currentAuthor ? Styles.sentMsg : Styles.receivedMsg }>
                <div style = { this.state.author == this.state.currentAuthor ? Styles.sentMsgDetails : Styles.receivedMsgDetails } >
                    <div style = { Styles.msgAuthor }>{ this.state.author }: </div>
                    <div style = { Styles.msgText }>{ this.state.message } </div>
                    <div style = { Styles.msgDate }>{ this.dateFormatting(this.state.dateAndTime) } </div>
                </div>
            </div>
        )
    }
}

export default Message;

