import configureStore from './store/configureStore';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Todos from './containers/Todos';
import TodoStatuses from './constants/TodoStatuses';


const store = configureStore({
  "todo": {
    "name": "Do somth",
    "filter": {
      "done": TodoStatuses.ALL
    },
    "items": [
      {
        "id": 1478630260441,
        "name": "Wake up",
        "done": true
      },
      {
        "id": 1478630266144,
        "name": "Say hello",
        "done": true
      },
      {
        "id": 1478630270875,
        "name": "Make a coffee",
        "done": false
      },
      {
        "id": 1478630283657,
        "name": "Have sex",
        "done": false
      }
    ]
  }
});

ReactDOM.render(<Provider store={store}><Todos/></Provider>, document.getElementById('app'));
