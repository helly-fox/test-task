import { fetchMessages, postMessage } from '../api';

export const getMessages = () => dispatch =>
    fetchMessages().then(res => dispatch({
        type: 'FETCH_MESSAGES',
        messages: res
    }));

export const addMessage = message => dispatch =>
    postMessage(message).then(res => dispatch({
        type: 'ADD_MESSAGE',
        messages: res
    }));
