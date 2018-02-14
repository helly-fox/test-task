import React from 'react';

const MessageList = ({children}) => {
    return <div className="messages">
        {children}
        <p className="messages__count">{`Number of messages: ${children.length || 0}`}</p>
    </div>;
};

export default MessageList;