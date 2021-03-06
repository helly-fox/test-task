import { combineReducers } from 'redux';

const messages = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MESSAGES':
        case 'ADD_MESSAGE':
            return action.messages;
        default:
            return state;
    }
};

export default combineReducers({
    messages
})