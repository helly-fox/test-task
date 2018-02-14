import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';

import ListContainer from './containers/ListContainer';

const store = configureStore();

ReactDOM.render(<ListContainer store={store} />, document.getElementById('message-app'));
