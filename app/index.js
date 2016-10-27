import 'babel-polyfill';
import App from 'app/components/App';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import 'app/styles/main.scss';

const store = createStore(function() {

});

render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('main'));
