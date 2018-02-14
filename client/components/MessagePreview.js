import React from 'react';

const MessagePreview = ({message}) => {
    return <div>
        <div className="message">
            <p className="messages__title">{message.title}</p>
            <p className="messages__content">{message.body}</p></div>
    </div>
};

export default MessagePreview;