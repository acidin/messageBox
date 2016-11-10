/**
 * Created by ace on 11/10/16.
 */

import React, {Component, PropTypes} from 'react';


export default class MessageApp extends Component {
    constructor (props) {
        super(props);
    }

    render(){

        return <div>
            <label>Send a message</label>
            <input type="text" value={this.props.messageTxt} onChange={e => this.props.cbChangeMessage(e)}/>
        </div>
    }
}


MessageApp.propTypes = {
    cbChangeMessage: PropTypes.func,
    messageTxt: PropTypes.string
};