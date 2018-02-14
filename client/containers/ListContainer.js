import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListWrapper from '../components/ListWrapper';
import { getMessages, addMessage } from '../actions';

const ListContainer = connect(({messages}) => ({
    messages
}), dispatch => ({
    onLoad() {
        dispatch(getMessages());
    },
    onSubmit(message) {
        dispatch(addMessage(message));
    }
}))(ListWrapper);

export default ListContainer;