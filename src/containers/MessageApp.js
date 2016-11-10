/**
 * Created by ace on 11/10/16.
 */
import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';


import MessageItem from '../components/MessageItem';
import RecipientItem from '../components/RecipientItem';


export default class MessageContainer extends Component {
    constructor (props) {
        super(props);
        this.state ={
            messageText: '',
            emailManual: '',
            emailDB: null
        }
    }

    cbChangeRecipient =(emailManual, emailDB)=> {
        this.setState({
            emailManual, emailDB
        });
    };

    cbChangeMessage =(e) => {

        this.setState({
            messageText: e.target.value
        });

    };

    sendData =()=> {
        const {emailManual, emailDB, messageText} = this.state;

        let email = emailDB || emailManual;

        return fetch(`/api/todos/`, {
            headers: JSON_HEADERS,
            method: 'POST',
            body: JSON.stringify({email, messageText})
        })
    };

    render(){

        const {messageText} = this.state;

        /*console.log(this.state);*/

        return <div>
            <RecipientItem cbChangeRecipient={this.cbChangeRecipient} />
            <MessageItem messageTxt={messageText} cbChangeMessage={this.cbChangeMessage} />
            <button onClick={() => this.sendData()}>Send</button>
        </div>
    }
}


