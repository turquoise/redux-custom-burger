import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://github-11e53.firebaseio.com/'
});

export default instance;
