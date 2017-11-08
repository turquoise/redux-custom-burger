import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';


axios.defaults.baseURL = 'https://github-11e53.firebaseio.com/';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render( app ,
  document.getElementById('root'));
registerServiceWorker();
