import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';


axios.defaults.baseURL = 'https://github-11e53.firebaseio.com/';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
