import configureStore from './store/configureStore';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Todos from './containers/Todos';

const store = configureStore();

ReactDOM.render(<Provider store={store}><Todos/></Provider>, document.getElementById('app'));
