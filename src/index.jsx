import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todo from '../src/components/todo';
import store from '../src/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>, document.getElementById('root'));
