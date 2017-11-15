import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './store/reducer';
const store = createStore(reducer);

axios.defaults.baseURL = 'https://github-11e53.firebaseio.com/';

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render( app ,
  document.getElementById('root'));
registerServiceWorker();
