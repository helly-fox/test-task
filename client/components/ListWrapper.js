import React, { Component } from 'react';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
import MessagePreview from './MessagePreview';

export default class ListWrapper extends Component {
    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        return (
            <div>
                <MessageForm onSubmit={this.props.onSubmit}/>
                <MessageList>
                    {this.props.messages.map((message, index) => <MessagePreview key={index} message={message}/>)}
                </MessageList>
            </div>
        );
    }
}
